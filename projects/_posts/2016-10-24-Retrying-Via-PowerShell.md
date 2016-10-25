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
- Linear. Waits a linear time between retries (n + n)
- Exponential. Waits an exponential amount of time between retries (n * n)
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

We don't need to worry on the details, so we'll simply use it when attempting to accessing the resources

To Be Continued...

<a href="{{ site.baseurl }}/{{ page.category }}">Back to {{ page.category }}</a>
