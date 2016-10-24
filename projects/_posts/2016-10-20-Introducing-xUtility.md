---
layout: post
title: Introducing xUtility
category: projects
published: true
---

Part of my strategy outlined at my [Project Roadmap](https://hobelinm.github.io/Project-Roadmap/) is to create several utilities. 
I've come up with different utilities that have helped me in the past or currently help me automate several tasks. 
Those are based on previous needs for automation or I saw the pattern to be useful in other languages and I thought of making the same pattern available on PowerShell or at least the core concepts which could be helpful in some situations. 
Based on those premises I've introduced xUtility module to the online community through [GitHub](https://github.com/hobelinm/PsxUtility) to make the source code available, and through [PowerShell Gallery](https://www.powershellgallery.com/packages/xUtility/) and [NPM](https://www.npmjs.com/package/ps-xutilities) for direct use.

This module is devoted to address some of those common problems in a general and extensible way. 
The features currently addressed are:

- Execution of ScriptBlock with retry policies. This is useful for several scenarios, for example accessing a file in multiple process can lock it making it unavailable for the other process for small periods of time. 
By using retrievable blocks scripts are no longer waiting or retrying for such operations on their own. 
Developers can create custom retry policies which dictate the behavior (number of retries, time between retries, exceptions to catch, etc.)
- Expiring cache. This is a special dictionary which allows developers to store the definition of an operation under a given key and with a desired expiration. This is useful to consult web resources, or perform expensive operations such as reading from a file. When reading from a file these cmdlets avoid hitting the hard drive every time we desire to access its contents and automatically read from disk after expiration
- Custom Prompt. This is designed to highlight the components of the current path, separate it for easy copy (double click only selects the path), display any error with the previous operation (sometimes hidden), and allow for extensiblity for displaying additional stuff defined by the user (something on the works for me is to reflect current state of git branches)
- Custom Title. Allows to identify easily different PowerShell windows, also provides functionality for user defined titles
- Console Transparency. Allows to enable console transparency as desired by the user
- Window Resizing. Allows to resize the PowerShell console. This is helpful when needing to fit wider content
- Admin Right cmdlets. Check for administrative premissions, allows for elevation of privileges (after user consempt, and when allowed) in order to run a given command
- Modification of Symbolic Link behavior. Allows to change the behavior of operations related to symbolic links (requires administrative privileges)
- Sublime Text launcher. Launches Sublime Text 3 by opening files or folders directly from the command line
- Console coloring helpers. Allows to display specific formatting on strings such as specific words or alternating rows' colors. It takes away the boring job of making the custom formating

Additional content will be added as needed so don't forget to come back every now and then. Hopefully this module will be helpful.

Happy Scripting!

<a href="{{ site.baseurl }}/{{ page.category }}">Back to {{ page.category }}</a>
