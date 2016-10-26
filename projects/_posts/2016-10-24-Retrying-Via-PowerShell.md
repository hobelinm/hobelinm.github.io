---
layout: post
title: Retry Execution in PowerShell
category: projects
published: true
---

It is common in PowerShell (or even on cmd) to encounter temporary issues. 
Cases where this occurs range from temporary file locks, transient network failures, to temporary web requests that fail occasionally. 
Usually developers have to implement a common pattern to simply retry either for any error exception or for a particular one. 
This usually involves a `try/catch/finally` and some loop. While the logic to write this is simple, is always a burden that the developer has to consider when accessing resources.

In order to save us some time I've created a couple of functions that wrap this retry functionality. It is based on a similar pattern for C# and .NET minus supporting multiple threads. It was written with flexibility in mind to allow the developer to:

- Have freedom to run any arbitrary `ScriptBlock`
- Allow the developer to design and specify any retry policy. That is the number of retries and the time between retries.

In this post I plan to show the usage of these functions to solve the common cases already addressed above. 
To start grab yourself a copy of `xUtility` module either from [PowerShell Gallery](https://www.powershellgallery.com/packages/xUtility/) or [NPM](https://www.npmjs.com/package/ps-xutilities). 
Follow the instructions on those places to set it up on your system. Then open a new `PowerShell` terminal and load the module:

![xUtility Loaded]({{ site.baseurl }}/images/xUtilityLoad.PNG "xUtility Default Prompt")

Verify that the following cmdlets are available:

- `New-RetryPolicy`
- `Invoke-ScriptBlockWithRetry`

![xUtility Commands]({{ site.baseurl }}/images/xUtility1.0.13Commands.PNG "xUtility Available Commands")

The first step in the use of these cmdlets is to create a retry policy object. 
The resulting policy object contains and algorithm which depicts the execution logic. 
There's a set of predefined policies that simulate common retry behaviors:

- Constant. Waits for a constant amount of time between retries
- Linear. Waits a linear time between retries (n + initial(n))
- Exponential. Waits an exponential amount of time between retries (n + n)
- Random. Waits for a random amount of time between retries (0 ~ n)

If these behaviors do not fit your needs you can still go through the work of defining your own retry logic. 
Defining a custom logic is simple, predefined behaviors are based on `Start-Sleep` cmdlet. 
Custom behavior logic is a ScriptBlock with the only requirement of acepting a `[HashTable] $WorkingSet` parameter. 
This parameter is injected at execution time and it is used to give a working memory of its own to the cmdlet. 
This was needed in order to ensure a consitent state when entering the retry block as it provides isolation from the current scope. The user has the option of created a set of initial values and pass this as the working set memory for the retry logic. This however it is not mandatory other by simply including a definition of the parameter in the passed `ScriptBlock`. 
The execution of the `ScriptBlock` shares the user scope and therefore modifying internal values there might lead to undesired behaviors. 
Use with care. For more details refer to the help section of `New-RetryPolicy` cmdlet by typing:

```powershell
PS> Get-Help New-RetryPolicy -Full
```

Hopefully most scenarios will fit on the predefined behaviors. 
If you feel that your scenario is common and should be considered feel free to open an issue in [GitHub](https://github.com/hobelinm/PsxUtility).

`New-RetryPolicy` takes the following inputs:

- Behavior. Either predefined or custom
- Number of retries
- Wait between retries in milliseconds. This value is used in reference to the behaviors already described 
- Exception activity. Optional string array that refers to any potential cmdlet throwing errors. Default any
- Exception category. Optional string array that refers to any potential error category to catch
- Exception error id. Optional string array that refers to any custom error id to look for

The exception categories when specified allow to retry only on those given conditions. 
Any other exception is thrown upstream and retry will not occur as the cmdlet will treat it as unexpected

For the sake of this post let's suppose we have other process mounting/unmounting another unit drive, say Z: under specific conditions. Meanwhile we have our PowerShell terminal trying to access the contents of the drive. 
The scriptor needs to use these cmdlets. The consideration is to use a wait time of 100 milliseconds with a linear increase. 
Also we will give them 10 attempts before failing. 
We don't want to filter on errors so we retry on any error so we build the following retry logic:

```powershell
PS> $policy = New-RetryPolicy -Policy Linear -Milliseconds 100 -Retries 10
```

The newly created policy object will look something similar:

![Retry Policy Object]({{ site.baseurl }}/images/RetryPolicyObject.PNG "Linear Retry Policy Object")

We don't need to worry on the details, so we'll simply use it when attempting to access the resources. 
To access the resources we'll simple give this command to `Invoke-ScriptBlockWithRetry`:

```powershell
PS> dir Z:\
```

Before feeding this command into the cmdlet is important to mention a couple of things:

- `Invoke-ScriptBlockWithRetry` works by catching terminating errors, therefore whatever `[ScriptBlock]` we pass in must throw a terminating error as a result of a failure we want to act on. 
This is important because in PowerShell there's the concept of [non-terminating errors](https://blogs.technet.microsoft.com/heyscriptingguy/2015/09/16/understanding-non-terminating-errors-in-powershell/) where a command or script can raise errors that are not considered 'terminating errors' and the execution would still continue (making it impossible for `Invoke-ScriptBlockWithRetry` to catch those).
- Luckily PowerShell provides a way of defining how to behave with non-terminating errors. 
This is done by means of the default variable `$ErrorActionPreference`. 
Typically this variable is set to 'Continue' which means that PowerShell will try to continue with execution of the remaining commands regardless of the non-terminating errors. 
To make `Invoke-ScriptBlockWithRetry` work there are two options:
  - Override the global value of `$ErrorActionPreference`
  - Use built-in support for overriding `$ErrorActionPreference` behavior for specific cmdlets

To override the default value use the following:

```powershell
PS> $ErrorActionPreference = 'Stop'
```

Note that this will apply only to the current session and you have to remember to apply this to new sessions. 
Therefore is not the recommended option.

A better approach is not to rely on the user state, and implement a robust support for this behavior. 
If you know the command that will produce the specific error try specifying a custom error action. 
If you are the creator of the cmdlets used inside the `[ScriptBlock]` (you can simply wrap the commands inside in your own function). 
Simply include the support for `[CmdletBinding()]` in your definition to get access to the PowerShell [Common Parameters](https://technet.microsoft.com/en-us/library/hh847884.aspx). 
Then you can override this behavior to stop as `<my_cmdlet> -ErrorAction Stop` to get the desired results. 

In our case `dir` is and alias of the cmdlet `Get-ChildItem` which we know supports `-ErrorAction` so we can fix our issue by simply adding it:

```powershell
PS> dir Z:\ -ErrorAction Stop
```

Now we have everything we need support this. So lets grab our newly generated policy object `$policy` and wrap the `dir` command in a `ScriptBlock`. 
For the sake of this post I will also include a `-Verbose` option to display the time increase once the command throws an error:

```powershell
PS> Invoke-ScriptBlockWithRetry -Context { dir Z:\ -ErrorAction Stop} -RetryPolicy $policy -Verbose
```

That command yields to the following output:

![Invoke-ScriptBlockWithRetry]({{ site.baseurl }}/images/Invoke-ScriptBlockWithRetry-Execution01.PNG "Invoke-ScriptBlockWithRetry sample")

In this case I did not make the resource available to test the use and to show that `Invoke-ScriptBlockWithRetry` respects the given policy in number of retries, the time between retries, and the change between retries. 
Finally once unable to execute the given `ScriptBlock` properly, the cmdlet returns the last error raised by it.

The wait between retries is also helpful as it does not blast requests, while the change in time allows to define a behavior when retrying.

Hopefully this will solve some of your issues with stale resources. 
I plan to use this as the foundation future cmdlets. 
If you have any issue open an issue in [GitHub](https://github.com/hobelinm/PsxUtility).

Feel free to leave any comment.

Happy scripting!

<a href="{{ site.baseurl }}/{{ page.category }}">Back to {{ page.category }}</a>
