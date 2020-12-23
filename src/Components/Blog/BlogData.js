const BlogData = [
  {
    id: 1,
    title: "Embrace Keyboard Macros into your Dev Life with AutoHotKey",
    category: "AutoHotKey",
    img:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Hwatv_hZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/aze6fjgef6pd9azercaj.jpeg",
    imgAlt: "Keyboard Macros Developer AutoHotKey",
    tags: ["AutoHotKey", "Productivity"],
    url: "embrace-macros-hotstrings-into-your-dev-life-with-autohotkey",
    date: "23 Oct, 2020",
    minread: "7",
    content: `
_[Cover image by Karol D, on Pexels.com](https://www.pexels.com/photo/black-lighted-gaming-keyboard-841228/)_

## Contents
- [What is AutoHotKey?](#what-is-autohotkey)
- [Installation](#installation)
- [Keyboard keys and combinations that you can map/remap](#keyboard-keys-and-combinations-that-you-can-mapremap)
- [Mapping our first keys](#mapping-our-first-keys)
- [Full code from this post](#full-code-from-this-post)

## What is AutoHotKey?

Without any blah-blah, [AutoHotKey (AHK)](https://www.autohotkey.com/) is a scripting/interpreted language, that you can write in a script that will continuously run in the background when you open it (but don't worry, you have 100% control of this script). Every function that you'll write will have a set of instructions that will trigger on a ***keystroke*** or a certain ***combination of keystrokes*** that you press at a time.

Okey-dokey, so what?

This means you can create *macros* (with key shortcuts) that activate some certain actions, like:
- select a word -> copy it -> open google on new chrome tab -> paste that word -> search it and show google results (all in less than 200milisecods)
- open a new tab with your favorite website
- open command prompt using \`CTRL+ALT+T\` shortcut
- open command prompt with the path of ***the currently selected directory*** and run a command (like \`npm start\` or \`git status\`)
- Adjust volume while ***holding a key+scrolling mouse wheel*** (the key could even be one of the side keys of your mouse, more on that later)
- Empty recycle bin by pressing \`WIN+DEL\` (or any key combo you wish), anytime, anywhere
- Put PC into sleep mode (if you don't have the \`FN-Sleep\` key)
- Auto rewrite 'brb' to 'be right back'... or...
- Autocomplete a for loop (or anything) syntax (any language, any text editor) just by writing \`forjs\`, \`forc\`, \`ifelsepy\`, or any ***hotstring*** you'd ever want to use
- The sky is your limit, also [the docs](https://www.autohotkey.com/docs/Tutorial.htm) and [the community](https://www.autohotkey.com/boards/) are really great. There are high chances that any question you'd have, you'll find it answered.

## Installation
Simply download and run the setup from [AutoHotKey.com](https://www.autohotkey.com/).

## Keyboard keys and combinations that you can map/remap

You can \`remap any key/combination keys\` or \`map any combination of keys without a default function\`. Here are some of my key/keys combination that I recommend mapping:

<center>

![Numpad Keys on a Keyboard](https://www.typinglounge.com/wp-content/uploads/2018/08/number-pad-10-keys.jpg)

</center>

1) You can remap your Numpad keys (if you don't use them), or you can remap your Numpad keys ***while Numlock is off***.

<center>

| With Numlock off | With Numlock on |
|------------------|-----------------|
| NumpadIns        | Numpad0         |
| NumpadEnd        | Numpad1         |
| NumpadDown       | Numpad2         |
| NumpadPgDn       | Numpad3         |
| NumpadLeft       | Numpad4         |
| NumpadClear      | Numpad5         |
| NumpadRight      | Numpad6         |
| NumpadHome       | Numpad7         |
| NumpadUp         | Numpad8         |
| NumpadPgUp       | Numpad9         |
| NumpadDel        | NumpadDot       |

</center>

In total, we can have up to 22 keys to assign macros with our Numpad.

2) You can map (unused) keyboard combinations like:
  - \`RAlt+(anyKeyLetter)\` or \`RAlt+(number)\`
  - \`CTRL+Alt+(anyKey)\` or even \`CTRL+SHIFT+ALT+(anyKey)\`

So, we have lots of alternatives when choosing our future keys to have macros.


## Mapping our first keys

Ok, enough talking - let's get into code and actually do something! 

To start writing a script we just need to create a new file with a \`.ahk\` extension. The first things we need to have in mind are some key notations we will use:

<center>

| Key notation in AHK |  Actual Key |
|:-------------------:|:-----------:|
|          ^          |   Control   |
|          +          |    Shift    |
|          !          |     Alt     |
|          #          | Windows Key |

</center>

Now, let's make some of the macros I mentioned earlier:

- **Let's say, we want to map \`CTRL+ALT+T\` to open our command prompt, just like in Linux**<br/>
In our newly created \`myMacros.ahk\` file *(that you can open with Notepad, Notepad++ or any text editor)*, we just need to write the following:

\`\`\`
^!t::Run cmd
\`\`\`

That's all! Save it, and, if you already installed AutoHotKey, you can double-click this new file, and a small green H icon will pop up:

<center>

![AutoHotKey Script Running](https://dev-to-uploads.s3.amazonaws.com/i/9m5553ssoahwv8keguy8.jpg)

</center>

This means our script is now running in the background! And, if you press \`CTRL+ALT+T\` (\`^!t\` in AHK's notation), you should see the Command Prompt that opens. Nice! Let's do more. Reopen \`myMacros.ahk\`, and let's add some more macros.

- **Let's say, any time you press \`CTRL+ALT++SHIFT+T\`, we open our PowerShell (instead of our command prompt)**... But also, let's make it that every time we open our PowerShell, we want it opened to \`C:\Users\MyUserName\`:

\`\`\`
; Also, this is a comment in AHK, it starts with ; and can be added anywhere

; use ctrl+alt+t to open Cmd Prompt in C:\Users\Radu location
^!t::Run cmd, C:\Users\Radu

; use ctrl+shift+alt+t to open PowerShell
^+!t:: Run powershell, C:\Users\Radu 
\`\`\`
Perfect, save it and click on the \`Reload this script\` option (that we saw earlier) from the taskbar.

- **Let's say that we want to open Google.com or Dev.to every time we press \`CTRL+ALT+1\` or \`CTRL+ALT+2\`**. Just add to our existing code, these lines, then reload:

\`\`\`
^!1::Run "https://www.google.com" ; use ctrl+alt+1
^!2::Run "https://dev.to"         ; use ctrl+alt+2
\`\`\`

- **Let's say that we want to adjust our Main Volume every time we are holding \`ALT\` while \`scrolling with our mouse wheel\`**. Add to our existing code, these lines, then reload:

\`\`\`
Alt & WheelUp::Volume_Up          ; use Alt+MouseWheel to adjust volume
Alt & WheelDown::Volume_Down
\`\`\`

Pretty good stuff so far, I'd say... But, we can do even more.

<center>

![I want more cat meme](https://dev-to-uploads.s3.amazonaws.com/i/2esgcsxzi1a3kj76v3ba.jpg)

</center>

- **Let's say that.. every time we select any text, we want to search for it on Google immediately by pressing \`CTRL+ALT+C\`**... Well, now we are going to write an entire function, within curly brackets, that ends with \`Return\`. Let's add these lines to our \`myMacros.ahk\`, save and reload:

\`\`\`
; use ctrl+alt+c to search on Google the currently selected text
^!c::
{
  Send, ^c
  Sleep 50
  Run, https://www.google.com/search?q=%clipboard%
  Return
}
\`\`\`
Awesome!

- **Let's empty recycle bin by pressing \`WIN+DEL\`**:

\`\`\`
#Del::FileRecycleEmpty ; use win+del
\`\`\`

- **[Let's put our PC in Sleep mode](https://www.autohotkey.com/docs/commands/Shutdown.htm) by using \`RightALT+s\`**. Note that we can also be specific about our choice of keys by saying the exact name of the key (\`RAlt\`) in combination (\`&\`) with \`s\`:

\`\`\`
RAlt & s:: DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)
\`\`\`

- **Finally, let's open the command prompt in our currently selected folder**. To do that, we know that by pressing \`Alt+d\` when having a folder opened will focus on *folder's path*. So our steps sound like this: *Focus on folder's path, copy it to clipboard, run cmd within that path*. So, this is the function we are looking for:

\`\`\`
^!u::     ; Use ctrl+alt+u to open cmd in current selected folder
{
  Send, !d
  Send, ^c
  Sleep 50
  Run cmd, %clipboard%
  Return
}
\`\`\`

Now, open a folder, press \`CTRL+ALT+U\`, and see what happens. It's a really handy little shortcut, eh?<br/>
We can even make it more powerful by saying to write a specific command for us, like \`git status\`, and also execute it:

\`\`\`
^!i::     ; Use ctrl+alt+i to open cmd in current selected folder
{
  Send, !d
  Send, ^c
  Sleep 50
  Run cmd, %clipboard%
  Sleep 100
  Send, git status
  Sleep 100
  Send, {Enter}
  Return
}
\`\`\`

Okay now, we are approaching the end of this post. Bellow, you'll find our full code from \`myMacros.ahk\` with all the things we accomplished.<br/>

And that's it... *for now*! In the next part of this post, we will use AutoHotKey to generate some autocompletion on each keyword (*Hot String*) that we'll write. We will also look and some macros that we can use with a mouse that has up to 9 buttons (the ones with 3 side buttons).

However, until then... There are a lot (I mean, ***a lot***) of other articles on AutoHotKey with the best macros ever imagined. AutoHotKey is a scripting language, so it has \`variables\`, \`for\` loops, \`conditionals\`, \`booleans\`, and even more... So it's a lot to take in.

I'll leave here some more interesting articles on this topic:
- [List of Keys (Keyboard, Mouse, and Joystick)](https://www.autohotkey.com/docs/KeyList.htm)
- [12 Favorite AutoHotKey Scripts You Can Use to Make Life Easier](https://www.maketecheasier.com/favorite-autohotkey-scripts/)
- [10+ Cool AutoHotkey Scripts](https://www.makeuseof.com/tag/10-cool-autohotkey-scripts-make/)
- [10 Handy AHK Scripts](https://jszapp.com/autohotkey-10-handy-autohotkey-scripts-make-life-easier/)
- [List of all Windows 10 keyboard shortcuts - to not overwrite them with AHK](https://www.windowscentral.com/best-windows-10-keyboard-shortcuts)
- [AutoHotKey for writing MarkDown](https://github.com/koepalex/autohotkey-markdown)



## Full code from this post

\`\`\`
; List of keyboard buttons
; ^ = Control
; + = Shift
; ! = Alt
; # = Win (Windows key)

^!t::Run cmd, C:\Users\Radu                    ; use ctrl+alt+t to open Cmd Prompt in C:\Users\Radu location
^+!t:: Run powershell, C:\Users\Radu           ; use ctrl+shift+alt+t to open PowerShell

; use win+del to empty recycle bin
#Del::FileRecycleEmpty

; use RightAlt+s to put PC on sleep mode
RAlt & s:: DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)

^!1::Run "https://www.google.com"              ; use ctrl+alt+1
^!2::Run "https://dev.to"                      ; use ctrl+alt+2
^!3::Run notepad.exe, WinActivate notepad.exe  ; Open and focus on notepad.exe

Alt & WheelUp::Volume_Up                       ; use Alt+MouseWheel to adjust volume
Alt & WheelDown::Volume_Down

^!c::     ; use ctrl+alt+c to search on Google the currently selected text
{
  Send, ^c
  Sleep 50
  Run, https://www.google.com/search?q=%clipboard%
  Return
}

^!u::     ; Use ctrl+alt+u to open cmd in currently selected folder
{
  Send, !d
  Send, ^c
  Sleep 50
  Run cmd, %clipboard%
  Return
}

^!i::     ; Use ctrl+alt+i to open cmd in currently selected folder
{
  Send, !d
  Send, ^c
  Sleep 50
  Run cmd, %clipboard%
  Sleep 100
  Send, git status
  Sleep 100
  Send, {Enter}
  Return
}
\`\`\`

Oh, almost forgot: I mentioned that you can use *single key macros* using the Numpad (with or without NumLock switched on). For all the macros mentioned earlier, just replace the key combo with a Numpad key, like so:

\`\`\`
NumpadIns::Run cmd, C:\Users\Radu                    ; use Numpad 0 (NumLock off) to open Cmd Prompt

NumpadDel::     ; use Numpad dot (NumLock off) to search on Google the currently selected text
{
  Send, ^c
  Sleep 50
  Run, https://www.google.com/search?q=%clipboard%
  Return
}

; etc
\`\`\`

Okaay. Twas a long post. Have a nice day. Bye.<br/>
R.B.
`,
  },
  {
    id: 2,
    title:
      "Embrace Mouse Macros into your Dev Life to increase your Productivity with AHK",
    category: "AutoHotKey",
    img:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Lj4n0Mq2--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/9eyt34vszh5bd6twffo7.jpg",
    imgAlt: "Mouse Macros AutoHotKey",
    tags: ["AutoHotKey", "Productivity"],
    url:
      "embrace-mouse-macros-into-your-dev-life-to-increase-your-productivity-with-ahk",
    date: "30 Oct, 2020",
    minread: "7",
    content: `
## Contents
- [Short Intro](#ShortIntro)
- [Setting up Mouse Macros](#MouseMacros)
  - [What macros we will create?](#MouseMacros)
  - [Mouse buttons we can map](#MouseButtons)
  - [Setting up a convention](#Convention)
  - [Mapping our mouse](#MappingMouse)
  - [Productive Scenarios](#ProductiveScen)
- [Bonus Macro for Front-end Devs](#BonusMacro)
- [Full code from this post](#FullCode)

## <a id="ShortIntro">Short Intro</a>

As we saw in our previous part of this post, we can achieve quite a few things with AutoHotKey keyboard macros. In this part, we will focus more on using combinations of a *3-sided-button mouse*. If you don't have such a mouse, well, don't worry, you can assign the following macros to any other keyboard keys you want (as discussed earlier), however, the prices of these type of mice are really cheap (starting from $10 for any *"gaming"* one, yet reliable). We'll later see some use-case scenarios for why such a mouse could be a real value for your general increase in productivity.

## <a id="MouseMacros">Mouse Macros we will create</a>

Hoping that you skipped the long "short" intro, let's look into the mouse macros we'll create today (macros that *don't require any interaction with a keyboard*):
- Adjust the main volume by holding a side key while scrolling
- Play/Pause our current song with a side key (Youtube, Spotify, Apple Music, Mixcloud, anything.)
- Screenshot an area with the help of [***LightShot***](https://app.prntscr.com/en/index.html)
- Copy any text/image and Paste it from clipboard
- Scroll back and forth through (Browser/Text Editor) tabs by holding a side key while scrolling
- Close a (Browser) tab
- Reopen a closed Browser tab (that was closed accidentally or that we actually needed)
- Search a selected text on Google (we will the same method as we saw in the previous post)

## <a id="MouseButtons">Mouse keys we can map</a>

Every mouse with 3 side buttons will have the default functions of \`Browser Go Back one page\`, \`Browser Go Forward\`, and a \`Control\` key. With AutoHotKey we can remap those Browser buttons. The \`Control\` button (set by default) is actually useful for selecting multiple files, zoom in/out, or select/edit multiple lines of code simultaneously in [***Sublime Text***](https://www.sublimetext.com/) (In [***VSCode***](https://code.visualstudio.com/) we would use \`Alt+Click\`).

<center>

![Mouse with 3 side buttons](https://dev-to-uploads.s3.amazonaws.com/i/zc0t3zyz580kp7fvwol5.jpg)

</center>

The [AHK notations for all of our mouse buttons](https://www.autohotkey.com/docs/KeyList.htm#mouse) are the following:

| Key notation in AHK     | Actual Mouse Key                                                             |
|-------------------------|------------------------------------------------------------------------------|
| LButton RButton MButton | Left, Right, Middle buttons                                                  |
| WheelDown WheelUp       | Our scroll wheel, obviously                                                  |
| XButton1                | 4th mouse button, typically performs the Browser_Back function               |
| XButton2                | 5th mouse button, typically performs the Browser_Forward function            |
| WheelLeft WheelRight    | Not real buttons, but they can be used as hotkeys to scroll to left or right |

## <a id="Convention">Setting up a convention</a>

Is totally up to you to choose the key combinations of the previously mentioned buttons. However, I've created a small convention that I'll use in this post:

<center>

![Mouse macros convention](https://dev-to-uploads.s3.amazonaws.com/i/khi392fi3gyy8or0tfoj.jpg)

</center>

## <a id="MappingMouse">Mapping our mouse</a>

Firstly, we need again to keep in mind the key notations in AHK for \`Control\`, \`Shift\`, \`Windows\`, and \`Alt\`:

| Key notation in AHK | Actual Key  |
|---------------------|-------------|
| ^                   | Control     |
| +                   | Shift       |
| !                   | Alt         |
| #                   | Windows Key |

And we'll also need to create a new \`.ahk\` file named \`mouseMacros.ahk\` (or we could just use the \`myMacros.ahk\` from the previous post and add the new macros there).

Finally, let's map our mouse. We'll start with our "5th mouse button" (\`XButton1\`) used for our Media macros.

- To play/pause our currently playing media (song), we'll just write:

~~~
XButton1::Media_Play_Pause
~~~

- We will also write the following lines to adjust our main volume:

~~~
XButton1 & WheelUp::Volume_Up
XButton1 & WheelDown::Volume_Down
~~~

Pretty straightforward I'd say. Let's save our file, and just double click it to open with AutoHotKey. The green 'H' icon will pop up letting us know that the script is running in the background:

<center>

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/tnxsdvlu7ej6axn6s3w5.jpg)

</center>

Now, we can start playing our favorite songs/playlists and hold \`XButton1\` while scrolling to see our volume changing.

Cool, let's add the next macros:

- Presuming that we installed [***LightShot***](https://app.prntscr.com/en/index.html), a very handy screenshot tool for Windows, we'll use the Middle mouse button to take a screenshot. And, let's also write the Copy (with left-click) and Paste (right-click) functions, while holding \`XButton1\`:

~~~
XButton1 & MButton::PrintScreen         ; Take screenshot
XButton1 & LButton::Send, ^c            ; Copy
XButton1 & RButton::^v                  ; Paste
~~~

Save this file, and click on \`"Reload This Script"\` option from the AHK icon.

Great! Next time when we are helping or asking somebody for help by sending a screenshot, we'll no longer take a picture with our phone, we'll just send a properly cropped screenshot instead, only by using our mouse!

<center>

![Screenshot Copy Paste just by using Mouse](https://dev-to-uploads.s3.amazonaws.com/i/kb7m68r98t4yddqtg2u8.gif)

</center>

Let's now add macros to the \`XButton2\`:
- By default, if we press \`CTRL+TAB\` (\`^Tab\`) or \`CTRL+SHIFT+TAB\` (\`^+Tab\`) in our Browser (eg. Chrome), we can go forward/backward one tab at a time. Let's add the following lines in order to go through tabs by scrolling with our mouse wheel (while holding \`XButton2\`):

~~~
XButton2 & WheelUp::^+Tab               ; Scroll through Browser tabs
XButton2 & WheelDown::^Tab
~~~

- We also know we can open Open a new tab (\`CTRL+T\` or \`^t\`), close the current tab (\`CTRL+W\` or \`^w\`), and reopen a closed tab (\`CTRL+SHIFT+T\` or \`^+t\`). We will map these keys into our mouse like this:

~~~
XButton2::^t                            ; New tab
XButton2 & RButton::^w                  ; Close current tab
XButton2 & MButton::^+t                 ; Reopen last tab
~~~

And, we will also use our useful macro to search on Google the currently selected text by pressing \`XButton2\` and \`Left Click\`:

~~~
XButton2 & LButton::                    ; Search currently selected text on Google
{
  Send, ^c
  Sleep 50
  Run, https://www.google.com/search?q=%clipboard%
  Return
}
~~~ 

Perfect. Let's save and reload the script... and also take it to a test drive!

<center>

![Google Errors just by pressing a button](https://dev-to-uploads.s3.amazonaws.com/i/hrofkuazxy0q6ksixfb4.gif)

</center>

Et voilà, we've successfully mapped our mouse.

## <a id="ProductiveScen">Productive Scenarios</a>

Okay, long talk ahead. After all those mappings, you may ask: "How the hell will I remember all these key combinations? My mouse/keyboard feels now like a puzzle that can do more harm than good with a wrong key press"... and yes, I would understand that. But, once you really start using these macros (one at a time), you will start getting comfortable. In a short period of time (maybe days or weeks), those macros will become second nature to you.

Let's assume the following scenario: You are running a newly written code, but you encounter an error. Let's assume that your usual workflow is to search on Google for that error, open a few tabs, close other tabs, copy and paste some lines of code, and repeat until you solve that one error. Now, we all know that we usually encounter dozens of errors, therefore our majority of time is all about searching for fixes. 

What if each time we encounter an error, we would execute the whole workflow just by some clicks with our mouse? while we are concentrating more on the solution?

Let's see how our earlier mapped macros could help us in this scenario:
- First, we run our code, error pops up: We just select the whole error text with our mouse, click both \`sideClick+leftClick\` and google solutions opens
- Now we are going to open a bunch of new tabs (using our \`middleClick\`) with some solutions (StackOverflow, GitHub, Dev, etc)
- Now we are scrolling through tabs (\`sideClick+mouseWheel\`) and fast reading solutions, some of them may contain code that we might want to copy and paste (\`sideClick+left/rightClick\`) into our project
- We are closing some of the irrelevant tabs with \`sideClick+leftClick\`
- We might realize that we actually needed a previously closen tab: \`sideClick+middleClick\`
- We might encounter a video tutorial on the way: \`sideClick\` (to pause the currently playing song), open tutorial, adjust volume (\`sideClick+mouseWheel\`)
- Repeat (without even touching the keyboard)

## <a id="BonusMacro">Bonus Macro for Front-end Devs</a>

Okay, here's one more useful macro for the front-end devs out there: We can copy to clipboard the HEX color of the current pixel under our cursor using \`CTRL+Win+LeftClick\` (or any other keys you want):

~~~
^#LButton::
{
  MouseGetPos, MouseX, MouseY
  PixelGetColor, color, %MouseX%, %MouseY%, RGB
  StringLower, color, color
  clipboard := SubStr(color, 3)
  Return
}
~~~

And here's a showcase:

<center>

![Copy Paste color under cursor](https://dev-to-uploads.s3.amazonaws.com/i/b4iduhtg9d0910vvzovz.gif)

</center>

## <a id="FullCode">Full code from this post</a>

~~~
XButton1::Media_Play_Pause
XButton1 & WheelUp::Volume_Up
XButton1 & WheelDown::Volume_Down
XButton1 & MButton::PrintScreen         ; Take screenshot
XButton1 & LButton::Send, ^c            ; Copy
XButton1 & RButton::^v                  ; Paste

XButton2 & WheelUp::^+Tab               ; Scroll through Browser tabs
XButton2 & WheelDown::^Tab
XButton2::^t                            ; New tab
XButton2 & RButton::^w                  ; Close current tab
XButton2 & MButton::^+t                 ; Reopen last tab
XButton2 & LButton::                    ; Search currently selected text on Google
{
  Send, ^c
  Sleep 50
  Run, https://www.google.com/search?q=%clipboard%
  Return
}

; Copy to clipboard the HEX color of the pixel under your cursor using CTRL+Win+LeftClick
^#LButton::
{
  MouseGetPos, MouseX, MouseY
  PixelGetColor, color, %MouseX%, %MouseY%, RGB
  StringLower, color, color
  clipboard := SubStr(color, 3)
  Return
}

~~~

Okay done, that was it! In the next part, we'll finally cover AutoHotKey's ***HotStrings***, hopefully as short as possible.

Keep improving yourself,<br/>
R.B.
    `,
  },
  {
    id: 3,
    title:
      "Use HotStrings in your Dev Life to increase your daily Productivity with AHK",
    category: "AutoHotKey",
    img:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Nvx0q_WF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/r4d5py4rldtl6kpjcjm6.jpg",
    imgAlt: "HotStrings for Developers AutoHotKey",
    tags: ["AutoHotKey", "Productivity"],
    url:
      "use-hotstrings-in-your-dev-life-to-increase-your-daily-productivity-with-ahk",
    date: "7 Nov, 2020",
    minread: "4",
    content: `

## Contents
- [What are AHK's HotStrings?](#what-are-ahks-hotstrings)
- [Hotstrings we are going to create](#hotstrings-we-are-going-to-create)
- [Hotstrings types](#hotstrings-types)
- [Creating our Hotstrings](#creating-our-hotstrings)

## What are AHK's HotStrings?
[HotStrings](https://www.autohotkey.com/docs/Hotstrings.htm) in [AutoHotKey](https://www.autohotkey.com/) "shortcuts" that are  mainly used to expand (or auto-replace) abbreviations as you type them:

<center>

![Using hotstrings abbreviation](https://dev-to-uploads.s3.amazonaws.com/i/crhu97l30wk4tikr5oaf.gif)

</center>

Hotstrings can be also used to launch any scripted actions (like the *macros* used in the previous posts).

---

## Hotstrings we are going to create
Let's see what Hotstrings we are going to create today:
- Some basic HTML tags for anchors, lists
- Autocomplete syntaxes for print, loops, conditionals, functions in your favorite programming language
- Dates in any format that we want (eg. \`dddd, MMMM dd, yyyy, HH:mm\`)

---

## Hotstrings types
Before we jump in to create some HotStrings, let's see a few differences between the two types of HotStrings:

- Hotstrings that are triggered *after* pressing an ending character (eg \`Space\`, \`.\`, or \`Enter\`)

~~~
::forloop::for (let i = 0; i < arr.length; i++) {
~~~

- Hotstrings that are triggered right after you wrote them (they contain an \`*\` - asterisk)

~~~
:*:printc::printf('%d\n', num);

:*:<a>::<a href="" title=""></a>
~~~

Okay, why is this important?
Well, if we are going to use only hotstrings that are triggered right after writing them (\`*\`), we have to make sure don't use keywords containing other used keywords inside them:

~~~
:*:printMe::console.log();
:*:printMeToo::System.out.println(); 
~~~

The \`printMeToo\` hotstring will never be triggered, because \`printMe\` will always trigger before we can write 'Too'.

<center>

![Using AHK for Java](https://dev-to-uploads.s3.amazonaws.com/i/ib2mf970r85dd5sv9ebj.gif)

</center>

Another example:

<center>

![Using AHK Hotstrings for JavaScript](https://dev-to-uploads.s3.amazonaws.com/i/emug8s6zmxkq6d87l0oz.gif)

</center>

Note that hotstrings aren't case sensitive by default ([you can read more here but it's not mandatory for our next hotstrings](https://www.autohotkey.com/docs/Hotstrings.htm)).

Another important aspect of these types of hotstring is their usage in different text editors. For example, we would use a hotstring triggered after \`Enter\` for \`for loops\`, because the editor will auto-close the brackets.

<center>

![Using Hotstrings for JavaScript](https://dev-to-uploads.s3.amazonaws.com/i/vl7tufanq79rut8zjq2z.gif)

</center>

---

## Creating our Hotstrings
Okaay, we already saw a few hotstrings. Let's jump into creating more! As we noticed, a hotstring starts with \`::\`, followed by their triggering keyword, then \`::\` again, and ends with the actual string used. So the syntax looks more or less like this:

~~~
::Keyword::String
:*:Keyword2::String2
~~~

Also, it's important to note that if we want to create hotstrings that use multiple lines, we need to use parentheses \`( )\`:

~~~
::quickfox::
(
The quick brown fox jumps over the lazy dog.
But no one asks how the fox feels...
)
~~~

<center>

![Autocomplete quick brown fox](https://dev-to-uploads.s3.amazonaws.com/i/35fh0zrc60cnh14okf7a.gif)

</center>

Or another example:

~~~
:*:mysignature::
(
Yours faithfully,
John Doe

john.doe@domain.com
www.johnnydoe.com
)
~~~

<center>

![Autocomplete signature in mail](https://dev-to-uploads.s3.amazonaws.com/i/12i7i3z1wzch8iil82el.gif)

</center>

<br/>

- Good, let's quickly write some auto-completion for HTML tags:

~~~
:*:<a>::<a href="" title=""></

::<ulli>::
(
<ul class="navbar-nav">
<li class="nav-item"><a href=""></</
<li class="nav-item"><a href=""></</
<li class="nav-item"><a href=""></</
</
)
~~~

<center>

![Autocomplete HTML tags using AutoHotKey](https://dev-to-uploads.s3.amazonaws.com/i/z1kewlhrgpjoftx4f2lz.gif)

</center>

However, the hotstrings for HTML tags really depend on the text editor that is currently used... For example, [Sublime Text](https://www.sublimetext.com/) auto-closes opened tags after writing \`</\`.

<br/>
Hmm, okay:

- Let's write a print statement in the following languages: C, Matlab, JavaScript, Java, C#: 

~~~
:*:printc::printf('%d\n', num);
:*:printm::fprintf('%d\n', num);

:*:logjs::
{
Send, console.log();{Left}{Left}
Return
}

:*:printjava::
{
Send, System.out.println();{Left}{Left}
Return
}

:*:writec#::
{
Send, Console.WriteLine();{Left}{Left}
Return
}
~~~

<center>

![Print statements using AutoHotKey](https://dev-to-uploads.s3.amazonaws.com/i/3mhycsibxwfuwc1zvv6k.gif)

</center>

Nice. "Debugging" will be a little easier now.

<center>

![Debuggig using prints](https://dev-to-uploads.s3.amazonaws.com/i/j3n72czl2sllp6yc6ed5.jpg)

</center>

Okay sorry for that. Note that for JS, Java and C# we used multiple instructions (macros) instead of a simple string (we used these a lot in previous parts of this post).

<br/>

- Let's see how we will write some \`loops\` in C, JavaScript, Python, and Matlab.

~~~
::forC::
(
for (int i = 0; i < n; i++) {
)

::forJs::
(
for (let i = 0; i < arr.length; i++) {
)

::forPy::for i in range(0, len(arr)):

:*:forMatlab::
(
for i = 1:step:length(arr)

end
)
~~~

<center>

![Loops autocomplete using AutoHotKey](https://dev-to-uploads.s3.amazonaws.com/i/ewbj31huxilnmxr7ifss.gif)

</center>

<br/>

- Finally, let's see a really useful feature of hotstrings, namely: Date types. Let's write the following scripts:

~~~
:*:datenow::
{
  FormatTime, DateString, , dddd, MMMM dd, yyyy
  Send %DateString%
  Return
}

:*:timenow::
{
  FormatTime, DateString, , HH:mm
  Send %DateString%
  Return
}
~~~

<center>

![Shortcut for Date and Time](https://dev-to-uploads.s3.amazonaws.com/i/jkewuta2lfzpzle855va.gif)

</center>

[Here's more info about dates and time formating in AHK](https://www.autohotkey.com/docs/commands/FormatTime.htm).

Let's see another useful scenario for using dates:

~~~
:*:datetoday::
{
  FormatTime, DateString, , yyyy-MM-dd
  Send %DateString%
  Return
}

:*:datetmr::
{
  Date += 1, Days
  FormatTime, DateString, %Date%, yyyy-MM-dd
  Send %DateString%
  Reload ; Return and clear variables
}
~~~

<center>

![Shortcut for Date and Time Excel](https://dev-to-uploads.s3.amazonaws.com/i/aur0yiwlnfjokybft6ss.gif)

</center>

Note that for \`datetmr\` we now used [AHK variables](https://www.autohotkey.com/docs/Variables.htm) such as \`%Date%\` in our script, and we also used \`Reload\` instead of \`Return\`. If we use \`Return\`, we won't clear the created \`%Date%\` variable, and each time we wrote \`datetmr\` hotstring, we will get the next day of the day before and so on. 

---

<center>

![The End graphics](https://dev-to-uploads.s3.amazonaws.com/i/1s60py6uektux3mxxlln.jpg)

</center>

*<p align="center"><a href="https://www.vecteezy.com/free-vector/movie">"The End" Movie Vector by Vecteezy</a></p>*

This was the last part of my ***AutoHotKey series for increasing productivity***. I hope that I got some of you into using macros and how beneficial they could be in multiple scenarios, or at least you got some other ideas for automating boring stuff with them.

Okay done. Happy coding and keep improving!<br/>
R.B.
    
    `,
  },
  {
    id: 4,
    title:
      "Top 8 macros for Developers to maximize their productivity with AHK",
    category: "AutoHotKey",
    img:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--rA9SM5Nk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/3hg5c4x142ctqu2qmskr.jpg",
    imgAlt: "Top AutoHotKey Macros for Developers",
    tags: ["AutoHotKey", "Productivity", "Tutorial"],
    url: "top-8-macros-for-developers-to-maximize-their-productivity-with-ahk",
    date: "12 Nov, 2020",
    minread: "8",
    content: `
## Contents

- [Short short Intro](#short-short-intro)
- [1. Run command prompt in the currently focused folder](#1-run-command-prompt-in-the-currently-focused-folder)
- [2. Run command prompt followed by certain commands](#2-run-command-prompt-followed-by-certain-commands)
- [3. Search on Google the currently selected text](#3-search-on-google-the-currently-selected-text)
- [4. Open applications/websites using shortcuts](#4-open-applicationswebsites-using-shortcuts)
- [5. Open new explorer window with the same path as the currently focused folder](#5-open-new-explorer-window-with-the-same-path-as-the-currently-focused-folder)
- [6. Copy to clipboard the HEX color of the pixel under your cursor](#6-copy-to-clipboard-the-hex-color-of-the-pixel-under-your-cursor)
- [7. Adjust the main volume using the mouse scroll wheel](#7-adjust-the-main-volume-using-the-mouse-scroll-wheel)
- [8. Auto-complete syntaxes with Hotstrings](#8-auto-complete-syntaxes-with-hotstrings)
- [Honorable mentions](#honorable-mentions)
  - [Put PC to sleep](#put-pc-to-sleep)
  - [Empty recycle bin](#empty-recycle-bin)
  - [Get the current date/hour](#get-the-current-datehour)
  - [Use arrow keys as Home/End while holding RAlt](#use-arrow-keys-as-homeend-while-holding-ralt)
  - [Disable CapsLock key](#disable-capslock-key)
- [Fin](#fin)

## Short short Intro

In this post, we'll summarize all the macros created with [AutoHotKey (AHK)](https://www.autohotkey.com/) in the previous parts (+extras). However, there is no need to read those parts as I'll provide a fast and short step by step guide on how to set AHK. 

Let's get started!

## 1. Run command prompt in the currently focused folder

If you don't have AutoHotKey installed, simply download it from [here](https://www.autohotkey.com/), then run the setup. Now we just need to create a file with \`.ahk\` extension (eg. \`myMacros.ahk\`). After you run this file (double click it), a small green H icon will pop up letting you know that the script is running in the background. Now, let's open the \`.ahk\` file with any text editor and add these lines:

~~~
^!u::     ; Use ctrl+alt+u to open cmd in current selected folder
{
  Send, !d
  Send, ^c
  Sleep 50
  Run cmd, %clipboard%
  Return
}
~~~

<center>

![AHK icon running in the background](https://dev-to-uploads.s3.amazonaws.com/i/eb6ltqy8tkw1455p41tq.jpg)

</center>

Save this file, and click on \`Reload This Script\` from the AHK icon. Now, open any folder, and press \`ctrl+alt+u\` to open cmd prompt with the folder's current path:

<center>

![Open command prompt in the current folder](https://dev-to-uploads.s3.amazonaws.com/i/p5avwg7kled2ugltzx0l.gif)

</center>

We can also keep in mind the key notations in AHK for \`Control\`, \`Shift\`, \`Windows\`, and \`Alt\`:

<center>

| Key notation in AHK | Actual Key  |
|---------------------|-------------|
| ^                   | Control     |
| +                   | Shift       |
| !                   | Alt         |
| #                   | Windows Key |

</center>

<br/>

## 2. Run command prompt followed by certain commands

From now on we will reopen \`myMacros.ahk\` with a text editor, and we'll just keep adding more macros, save the file, then click on \`Reload this Script\`. 

We can add more commands after opening the command prompt. For example, we can run \`git status\` right after (or \`npm start\`, \`python ./manage.py runserver\` etc):

~~~
^!+u::     ; Use ctrl+alt+shift+u to open cmd in current selected folder and run git status
{
  Send, !d
  Send, ^c
  Sleep 50
  Run cmd, %clipboard%
  Sleep 100
  Send, git status
  Sleep 100
  Send, {Enter}
  Return
}
~~~

Or, if you use [Jupyter Notebook](https://jupyter.org/) in a specific drive partition and/or environment, instead of opening it with command prompt, you can just use a shortcut like \`ctrl+alt+j\` (or even \`ctrl+win+j\` or whatever you want) and write all the corresponding commands automatically. Just add this macro:

~~~
^!j::                                  ; use ctrl+alt+j
{                                      ; to open jupyter notebook in g: in tf_gpu conda env
  Run cmd, g:
  Sleep 100
  Send, activate tf_gpu
  Sleep 1000
  Send, {Enter}
  Send, jupyter notebook
  Sleep 2000
  Send, {Enter}
  Return
}
~~~

Or you can fast open Python in command prompt by pressing \`ctrl+alt+p\`:

~~~
^!p::                                  ; use ctrl+alt+p
{                                      ; to open cmd prompt in python
  Run cmd, C:\Users\MyUserName
  Sleep 100
  Send, python
  Sleep 100
  Send, {Enter}
  Return
}
~~~

<center>

![Open Python Shortcut Windows](https://dev-to-uploads.s3.amazonaws.com/i/hd3rv8ix9fxiuo64zhil.gif)

</center>

<br/>

## 3. Search on Google the currently selected text

Add these lines in your \`myMacros.ahk\` to search on Google the selected text using \`Ctrl+Alt+c\`:

~~~
^!c:: ; use ctrl+alt+c to search on google
{
  Send, ^c
  Sleep 50
  Run, http://www.google.com/search?q=%clipboard%
  Return
}
~~~

If you have a mouse with 3 side buttons, you can even assign this macro by pressing Left Click while holding the middle left-sided mouse button ([More details in my previous post](https://dev.to/radualexandrub/embrace-mouse-macros-into-your-dev-life-to-increase-your-productivity-with-ahk-part-2-358j)):

~~~
XButton2 & LButton:: ; Search currently selected text on Google
{
  Send, ^c
  Sleep 100
  If InStr(clipboard, "http")
    Run, %clipboard%
  Else
    Run, https://www.google.com/search?q=%clipboard%
  Return
}

; Note: if the selected text is a link, open it in a new tab
; Otherwise, search the selected text on Google
~~~

We can also search on other websites, such as [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/).

~~~
^#u:: ; use ctrl+win+u to search on Unsplash
{
  Send, ^c
  Sleep 50
  Run, https://unsplash.com/s/photos/%clipboard%
  Return
}
~~~

~~~
^#p:: ; use ctrl+win+p to search on Pexels
{
  Send, ^c
  Sleep 50
  Run, https://www.pexels.com/search/%clipboard%
  Return
}
~~~

<br/>

## 4. Open applications/websites using shortcuts

We can open any application using any shortcut key. For reference, we can use the following keys (without overwriting the system's shortcuts):
- \`RAlt+(anyKeyLetter)\` or \`RAlt+(anyNumber)\`
- \`Ctrl+Alt+(anyKey)\` (But be aware that some applications might use these key combinations, [you can check using DefKey.com](https://defkey.com/search?irq=ctrl+alt+d))
- \`Ctrl+Shift+Alt+(anyKey)\`
- \`Alt+Shift+(anyKey)\` ([Check here](https://defkey.com/search?irq=alt+shift))
- \`Ctrl+Win+(anyKey)\`
- \`Ctrl+Win+Alt+(anyKey)\`

Here are some examples:

~~~
^#1::Run "https://mail.google.com/mail/u/0/#inbox"   ; use ctrl+win+1 to open gmail 1
^#2::Run "https://mail.google.com/mail/u/1/#inbox"   ; use ctrl+win+2 to open gmail 2
^#3::Run "https://translate.google.ro/?hl=ro&tab=wT" ; use ctrl+win+3 to open Google Translate

^+!1::Run "https://www.google.com"      ; use ctrl+shift+alt+1
^+!2::Run "https://dev.to"              ; use ctrl+shift+alt+2
^+!3::Run "https://www.linkedin.com"    ; use ctrl+shift+alt+3
^+!4::Run "https://www.spotify.com/"    ; use ctrl+shift+alt+4
^+!5::Run "https://www.mixcloud.com/"   ; use ctrl+shift+alt+5
^+!6::Run "https://www.freecodecamp.org/learn/"

^!t::Run cmd, C:\Users\Username         ; use ctrl+alt+t to run Cmd
^!w::Run winamp.exe                     ; use ctrl+alt+w to run Winamp
^!s::Run C:\Program Files\Sublime Text 3\sublime_text.exe
^!v::Run C:\Users\Username\AppData\Local\Programs\Microsoft VS Code\Code.exe
~~~

<br/>

## 5. Open new explorer window with the same path as the currently focused folder

I often use \`Win+E\` default shortcut to open the Explorer, but oftentimes I need to open a new window within the same location to move/organize some files. So why not use \`Ctrl+Win+E\` shortcut to do that?

~~~
^#e::                                  ; use ctrl+win+e 
{                                      ; to open new explorer window with the same selected folder
  Send, !d
  Sleep 50
  Send, ^c
  Sleep 100
  Run, Explorer "%clipboard%" 
  Return
}
~~~

We can do even more by opening the new explorer and have both windows side by side, and even have the new window go up one level:

~~~
^+#e::                                  ; use ctrl+shift+win+e 
{                                       ; to open new explorer window with the same selected folder
  Send, #{Left}
  Sleep 50  
  Send, !d
  Sleep 50
  Send, ^c
  Sleep 100
  Run, Explorer "%clipboard%"
  Sleep 900
  Send, !{Up}
  Sleep 600
  Send, #{Right}
  Return
}
~~~

<center>

![Open new Explorer with same path](https://dev-to-uploads.s3.amazonaws.com/i/xtjf86n9etbqa8cis3hz.gif)

</center>

<br/>

## 6. Copy to clipboard the HEX color of the pixel under your cursor

We can copy the HEX color under our cursor using \`Ctrl+Win+LeftClick\`:

~~~
; Copy to clipboard the HEX color of the pixel under your cursor using CTRL+Win+LeftClick
^#LButton::
{
  MouseGetPos, MouseX, MouseY
  PixelGetColor, color, %MouseX%, %MouseY%, RGB
  StringLower, color, color
  clipboard := SubStr(color, 3)
  Return
}
~~~

<center>

![Copy HEX Color under cursor](https://dev-to-uploads.s3.amazonaws.com/i/yof70dn80nmdwpinkguc.gif)

</center>

<br/>

## 7. Adjust the main volume using the mouse scroll wheel

You can adjust your main volume with key combinations such as \`RAlt & NumpadAdd\`/\`RAlt & NumpadSub\`, or with your mouse wheel while holding \`Right Alt\`:

~~~
RAlt & WheelUp::Volume_Up
RAlt & WheelDown::Volume_Down
~~~

Or, you can hold down one of the side buttons on your mouse while scrolling (if you have such a mouse)

~~~
XButton1 & WheelUp::Volume_Up
XButton1 & WheelDown::Volume_Down
~~~

We can also play/pause our current playing song using a left-side mouse button:

~~~
XButton1::Media_Play_Pause
~~~

We can do so much more using our side mouse buttons! You can read more about mouse macros [in my previous post](https://dev.to/radualexandrub/embrace-mouse-macros-into-your-dev-life-to-increase-your-productivity-with-ahk-part-2-358j).

<br/>

## 8. Auto-complete syntaxes with Hotstrings

These are not exactly keyboard shortcuts, but rather abbreviations expansions. More important, we can use any keywords that we like in order to auto-complete syntaxes such as print statements and loops, in any programming language:

~~~
:*:printc::printf('%d\n', num);

:*:logjs::
{
Send, console.log();{Left}{Left}
Return
}

:*:printjava::
{
Send, System.out.println();{Left}{Left}
Return
}

:*:writecs::
{
Send, Console.WriteLine();{Left}{Left}
Return
}
~~~

<center>

![Print statements shortcuts](https://dev-to-uploads.s3.amazonaws.com/i/azuphfte69qj4p877p5m.gif)

</center>

~~~
::forC::
(
for (int i = 0; i < n; i++) {
)

::forJs::
(
for (let i = 0; i < arr.length; i++) {
)

::forPy::for i in range(0, len(arr)):

:*:forMatlab::
(
for i = 1:step:length(arr)

end
)
~~~

<center>

![Loops autocomplete using AutoHotKey](https://dev-to-uploads.s3.amazonaws.com/i/ewbj31huxilnmxr7ifss.gif)

</center>

~~~
::switchJs::
(
switch() {
case 0:
   
break;
case 1:
    
break;
default:
)
~~~

<center>

![Switch Case autocomplete shortcut](https://dev-to-uploads.s3.amazonaws.com/i/qmc1fsmsowwkosdzbhv1.gif)

</center>

I've made a complete guide on using AutoHotKey's hotstrings [here](https://dev.to/radualexandrub/use-hotstrings-in-your-dev-life-to-increase-your-daily-productivity-with-ahk-3l79).

<br/>

## Honorable mentions 

### Put PC to sleep

We can get our PC into sleep mode by using a key shortcut like \`RAlt+PauseKey\`:

~~~
; Put PC in sleep mode
RAlt & Pause::DllCall("PowrProf\SetSuspendState", "int", 0, "int", 0, "int", 0)
~~~

### Empty recycle bin

We can empty the recycle bin by using \`WinKey+Del\`:

~~~
#Del::FileRecycleEmpty ; use win+del to empty recycle bin
~~~

### Get the current date/hour

We can use AutoHotKey's Hotstrings to write the current system's date & time:

~~~
:*:datenow::
{
  FormatTime, DateString, , dddd, MMMM dd, yyyy
  Send %DateString%
  Return
}

:*:timenow::
{
  FormatTime, DateString, , HH:mm
  Send %DateString%
  Return
}
~~~

<center>

![Shortcut for Date and Time](https://dev-to-uploads.s3.amazonaws.com/i/jkewuta2lfzpzle855va.gif)

</center>

~~~
:*:datetoday::
{
  FormatTime, DateString, , yyyy-MM-dd
  Send %DateString%
  Return
}

:*:datetmr::
{
  Date += 1, Days
  FormatTime, DateString, %Date%, yyyy-MM-dd
  Send %DateString%
  Reload ; Return and clear variables
}
~~~

<center>

![Shortcut for Date and Time Excel](https://dev-to-uploads.s3.amazonaws.com/i/aur0yiwlnfjokybft6ss.gif)

</center>

### Use arrow keys as Home/End while holding RAlt

If you like cutting, pasting, and selecting lots of text. These "macros" might be handy:

~~~
; Arrow keys as Home/End
RAlt & Left::
{
  If GetKeyState("Shift", "P")
    Send +{Home}
  Else
    Send {Home}
  Return
}
RAlt & Right::
{
  If GetKeyState("Shift", "P")
    Send +{End}
  Else
    Send {End}
  Return
}
~~~

### Disable CapsLock key

Well, if you find yourself accidentally switching the CapsLock state from time to time... you can actually disable it completely. At the very first beginning of the \`.ahk\` file, just add the following:

~~~
; Set Lock Keys permanently off
SetCapsLockState, AlwaysOff
Return
~~~

This is especially useful if we are using 60% keyboards. However, if you need to use CapsLock now and then, you can make it a little harder to toggle it's state, by pressing \`Alt+CapsLock\` instead:

~~~
; Set Lock Keys permanently off by default
SetCapsLockState, AlwaysOff
Return

Alt & CapsLock::
If GetKeyState("CapsLock","T")
  SetCapsLockState, AlwaysOff
Else
  SetCapsLockState, On
Return
~~~

You can find more on AHK's \`GetKeyState()\` [here](https://www.autohotkey.com/docs/commands/GetKeyState.htm).

## Fin

<center>

<img src="https://dev-to-uploads.s3.amazonaws.com/i/t2t3zpzrges0132q9fn9.jpg" alt="Mountains photo" width="90%"/>

</center>

*<p align="center">Mountains Photo by <a href="https://unsplash.com/@vorosbenisop?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Benjamin Voros</a> on <a href="https://unsplash.com/s/photos/mountains?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>*

That was it! I'm hoping that you found some of these macros actually useful in your day to day life... or maybe you got some other ideas for your workflow.

Have a wonderful day,<br/>
R.B.
    `,
  },
  {
    id: 5,
    title: "How to add Like/Unlike button to your Django Blog",
    category: "Python",
    img:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--mtnQn7OU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/azz3kd1q4596zdz2z8qg.jpg",
    imgAlt: "Django Blog Like Button",
    tags: ["Django", "Python", "Tutorial"],
    url: "how-to-add-like-unlike-button-to-your-django-blog",
    date: "14 Oct, 2020",
    minread: "3",
    content: `
In this mini-tutorial, we will add a Like/Unlike functionality to our Django Blog. As a note, we will implement this feature while using a class-based view for our BlogPost DetailView.

> 2nd NOTE: Unfortunately, we cannot avoid the page refresh after every click of Like/Unlike button. In order to skip the refresh, it is needed to implement the whole functionality of Like/Unlike button inside our blogpost-detail HTML, using Ajax.js. This mini-tutorial will not focus on this type of implementation.

Let's get started, first, in our \`models.py\` we need to add to our BlogPost model the following fields:

~~~python
# models.py
from django.db import models
from django.contrib.auth.models import User

class BlogPost(models.Model):
    ...
    likes = models.ManyToManyField(User, related_name='blogpost_like')

    def number_of_likes(self):
        return self.likes.count()
~~~

**"likes"** is a Many-to-many relationship with our User model, meaning that users (objects) can have multiple likes, and blog posts can have multiple likes. The function **number_of_likes** will return the number of likes of the current blog post object.

After every change in the models.py file, we need to open our terminal and make the migrations to our database:

~~~bash
# CLI/Terminal
>> cd C:\Projects\...\YourDjangoAppMainFolder
>> python manage.py makemigrations
>> python manage.py migrate
~~~

Let's now make a function-based view for our Like button functionality. In your \`view.py\` file, right before (or after) your BlogPost DetailView class, define a BlogPostLike function:

~~~python
# views.py
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect
from django.urls import reverse

def BlogPostLike(request, pk):
    post = get_object_or_404(BlogPost, id=request.POST.get('blogpost_id'))
    if post.likes.filter(id=request.user.id).exists():
        post.likes.remove(request.user)
    else:
        post.likes.add(request.user)

    return HttpResponseRedirect(reverse('blogpost-detail', args=[str(pk)]))
~~~

***'blogpost_id'*** will be our button identification in our \`blogpost_detail.html\`. Every time a logged-in user clicks the Like button, we will retrieve his id and then will check if that user already liked or not the current blogpost (more specifically: *if like from user x exists, then remove like from current blogpost, else, add like from user x to current blogpost*). Then we will redirect the user to the same blogpost page (like a refresh of that page). 

Now, it the same \`view.py\` file, where we've implemented our BlogPost DetailView, we need to add to our get_context_data the following:

~~~python
# views.py
class BlogPostDetailView(DetailView):
    model = BlogPost
    # template_name = MainApp/BlogPost_detail.html
    # context_object_name = 'object'

    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)

        likes_connected = get_object_or_404(BlogPost, id=self.kwargs['pk'])
        liked = False
        if likes_connected.likes.filter(id=self.request.user.id).exists():
            liked = True
        data['number_of_likes'] = likes_connected.number_of_likes()
        data['post_is_liked'] = liked
        return data
~~~

Within our \`get_context_data\` function, we will retrieve the current blogpost primary key, and we will check if the currently logged-in user has liked or not this blog post. We will store in a local variable this statement, to send it further as a context to our HTML-based blogpost_detail. We will also retrieve the number of likes (calling the earlier written function) in order to display the number of likes directly in our HTML template.

Let's also add this new function-based view to our \`urls.py\`:

~~~python
# urls.py
from django.urls import path
from .views import (
    ...
    BlogPostLike,
    ...
)

urlpatterns = [
    ...
    path('blogpost-like/<int:pk>', views.BlogPostLike, name="blogpost_like"),
    ...
]
~~~

Finally, to our \`blogpost_detail.html\` let's write in the DjangoTemplateLanguage the following:

~~~HTML
<!-- LIKES -->
{% if user.is_authenticated %}
  <form action="{% url 'blogpost_like' object.id %}" method="POST">
	{% csrf_token %}

	{% if post_is_liked %}
	<button type="submit" name="blogpost_id" value="{{object.id}}" class="btn btn-info">Unlike</button>
	{% else %}
	<button type="submit" name="blogpost_id" value="{{object.id}}" class="btn btn-info">Like</button>
	{% endif %}
  </form>
{% else %}
  <a class="btn btn-outline-info" href="{% url 'login' %}?next={{request.path}}">Log in to like this article!</a><br>
{% endif %}
<strong class="text-secondary">{{ number_of_likes }} Like{{ number_of_likes|pluralize }}</strong>
~~~

And we are done!

<center>

![Example of Like Button](https://lh3.googleusercontent.com/p2MbD-FCURo62GmLBI-OEpMXvXI2A5zDQAHDfJ41etEAQrBhZT9KKEzCpJ0LLyi_m2QGC3Dbdsk8-XIzNincoozjCgCGKc1jK77sBC_Ki2I07GBI3v1oy1Ex9FRuQYOigsD3gpQmAHE=w2400)

</center>

`,
  },
  {
    id: 6,
    title: "How to create a Comment Section for your Django Blog!",
    category: "Python",
    img:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--1Ka6VIbE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ane2uvta7ogzw98s418v.jpg",
    imgAlt: "Django Blog Comment Section",
    tags: ["Django", "Python", "Tutorial"],
    url: "how-to-create-a-comment-section-for-your-django-blog",
    date: "28 Sep, 2020",
    minread: "5",
    content: `
Hi!

This mini-tutorial will focus on creating a Comment Section for **adding** (without update/delete) comments to each blog post. We will implement this feature while using a *class-based* view, namely our ***BlogPost DetailView***, mine's looks like this:

~~~python
# MainApp/models.py
class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=200, blank=True, null=True)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(upload_to='blog_images',
                              storage=gd_storage, null=True, blank=True)

    def __str__(self):
        return self.author.username + ', ' + self.title[:40]

    def get_absolute_url(self):
        return reverse('blogpost-detail', kwargs={'pk': self.pk})

# MainApp/views.py
class BlogPostDetailView(DetailView):
    model = BlogPost
    # template_name = MainApp/BlogPost_detail.html
    # context_object_name = 'object'
~~~

<hr/>

First things first: we need to create our BlogComment model in our \`models.py\`. We can personalize our model in any way we want, I'll stick to the basics of a comment and will add the following fields: *author*, *content/body*, and *a date* (when the comment was posted):

~~~python
# models.py
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class BlogComment(models.Model):
    blogpost_connected = models.ForeignKey(
        BlogPost, related_name='comments', on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = TextField()
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return str(self.author) + ', ' + self.blogpost_connected.title[:40]
~~~

- Every BlogComment will have an id (foreign key) of its BlogPost (a BlogPost can have multiple BlogComments), and if a BlogPost is deleted, then all the BlogComments that were linked to that BlogPost will be deleted (on_delete == CASCADE).
- The author will also be a foreign key to the whole User object (that has its User id, username, email, etc), therefore a User can have multiple comments.
- We will also add the magic method __str__() to view the comments in a more readable way (instead of viewing the object type) when we are making queries from our CLI/Admin panel).

<center>

<img width="90%" src="https://lh3.googleusercontent.com/69xf-pQkvH4LVRLar9gbwykflgcAa7tNOctrErrlH4NMmiPbwWy8XpgApwU7SbtB2ZyxUVCoo0-GKFknOmkHUQ52pUInuZF57UWJbZrQ9JJCWJsIGtXZJ_Qxiaz4uXe2ZV0W2gXLa-I=w2400" alt="Database Diagram for our comment" />

</center>

<br/>

In \`models.py\`, in our BlogPost model, we can also write a function that will return the number of comments of a blog post:

~~~python
# models.py
class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    ...

    @property
    def number_of_comments(self):
        return BlogComment.objects.filter(blogpost_connected=self).count()
~~~

After every change in the models.py file, we need to open our terminal and make the migrations to our database:

~~~bash
# CLI/Terminal
>> cd C:\Projects\...\YourDjangoAppMainFolder
>> python manage.py makemigrations
>> python manage.py migrate
~~~

<hr>

Let's create a new form class: In the same folder as our models.py, create a new file named \`forms.py\`, where we'll write the following:

~~~python
# forms.py
from django import forms
from .models import BlogComment

class NewCommentForm(forms.ModelForm):
    class Meta:
        model = BlogComment
        fields = ['content']
~~~

Très bien, now we can add to our [get_context_data](https://docs.djangoproject.com/en/3.1/topics/class-based-views/generic-display/#adding-extra-context) function within our class-based view BlogPost DetailView, in views.py, the following:

~~~python
# views.py
from .models import BlogPost, BlogComment
from .forms import NewCommentForm

class BlogPostDetailView(DetailView):
    model = BlogPost
    # template_name = MainApp/BlogPost_detail.html
    # context_object_name = 'object'

    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)

        comments_connected = BlogComment.objects.filter(
            blogpost_connected=self.get_object()).order_by('-date_posted')
        data['comments'] = comments_connected
        if self.request.user.is_authenticated:
            data['comment_form'] = NewCommentForm(instance=self.request.user)

        return data
~~~

Here we will retrieve all the comments from our current BlogPost object, store them (the query) in a local variable *comments_connected*, then send it further as a context to our HTML-based blogpost_detail.

However, in order to post comments directly from our class-based BlogPost DetailView, we also need to define a **post method** to receive the context from our form (situated in this view/html). Therefore, in the same class, we need to add:

~~~python
# views.py
class BlogPostDetailView(DetailView):
    ... 

    def get_context_data(self, **kwargs):
        ...

    def post(self, request, *args, **kwargs):
        new_comment = BlogComment(content=request.POST.get('content'),
                                  author=self.request.user,
                                  blogpost_connected=self.get_object())
        new_comment.save()
        return self.get(self, request, *args, **kwargs)
~~~

<hr/>

Finally, in our \`blogpost_detail.html\` let's write in the DjangoTemplateLanguage the following:

~~~html
<!-- COMMENTS  -->
<h2>Leave your comment!</h2>
<div id="comments_section">

  {% if user.is_authenticated %}
  <form method="POST">
	{% csrf_token %}
	<div class="form-group">
	  {{ comment_form }}
	  <button class="btn btn-info" type="submit">Add comment <i class="fas fa-comments"></i></button>
	</div>
  </form>
  {% else %}
  <a class="btn btn-outline-info" href="{% url 'login' %}?next={{request.path}}">Log in to add a comment!</a><br>
  {% endif %}

  {% if comments %}
  <strong class="text-secondary">{{ object.number_of_comments }} Comment{{ object.number_of_comments|pluralize }}</strong>
  <hr>
  <ul>
    {% for comment in comments %}
    <li>           
     <div>
	    <span>
	      <strong class="text-info">{{ comment.author }} </strong>
	      <small class="text-muted">{{ comment.date_posted }}</small>
	    </span>
	    <p>
	      {{ comment.content|safe }}
	    </p>
      </div>
    </li>
	{% endfor %}
  </ul>
  {% else %}
    <strong class="text-secondary">No comments yet...</strong>
  {% endif %}

</div>
~~~

Sooo, there's a lot of code there, let's go through some parts of it step by step:
- The first thing that we do is to check if the user is authenticated: if True, then show the user a form where he can write the content of his new comment. if False, then show the user a button that redirects him to the Login page. Also, it's important that after a user logs into his account to redirect him to the earlier blog post that he wanted to post a comment, so we'll add to our redirect link \`"?next={{request.path}}"\` where request.path is the current page path (e.g. localhost/blogpost/7)
- Then we check if our current blogpost has any comments, if not, we'll put in our HTML "No comments yet..", but if we have any comments, we will then write the number of comments and then we will loop through each of them and show its author, date, and content.

<hr/>

Perfect, so we are almost done! However, this comment section will look rather dull... Therefore we need to create some styling, that we can find on Google or... [here](https://www.bootdey.com/snippets/view/Simple-Comment-panel#html) (thanks to [bootdey.com](https://www.bootdey.com/))! To integrate it, we just need to add the CSS code in our \`blogpost_detail.html\` and the corresponding tags in our \`<div> and <ul>\` (list) sections, following their example.

Nice, now we are done! Hope you will find this useful. 😁
You can see a live example of this comment section on my blog: [codingtranquillity.herokuapp.com](https://codingtranquillity.herokuapp.com/)... where you can also find more articles like this! 

Have a nice day and... Happy coding!<br/>
R.B.
    `,
  },
  {
    id: 7,
    title:
      "How to add sitemap.xml to your Django Blog and make it work on Heroku (SEO)",
    category: "Python",
    img:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--NAK_LWtR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/smvtd77pmnsscr3mn3jw.jpg",
    imgAlt: "Django Blog Comment Section",
    tags: ["Django", "Python", "Tutorial"],
    url:
      "how-to-add-sitemap-xml-to-your-django-blog-and-make-it-work-on-heroku",
    date: "21 Sep, 2020",
    minread: "3",
    content: `
Okay, I've spent a little to much time to figure this out, but here's my version of the **Simplest Way to Add sitemap.xml to a Django App that is hosted on Heroku**. This will also solve the error: _"Internal Error 500"_ when trying to access /sitemap.xml from Heroku live app (production).

First things first, make sure you have what to serve as static or as dynamic links. In this example, I'll add to my sitemap.xml my dynamically created BlogPosts and 3 more static pages: Main/Index.html, About.html and Contact.html. So let's get started:

Firstly we need to add to our **settings.py** file the followings:
~~~python
# settings.py
INSTALLED_APPS = [
    ...

    'django.contrib.sitemaps',
    'django.contrib.sites',
]
SITE_ID = 1
~~~

Then, locally, we need to open our terminal and run python manage.py migrate. This will add to our local database the Sites model.

<center>

![Django Sites table](https://lh3.googleusercontent.com/C3AInAsgFAdAaP86bFDSOD6_qtn5BH79zckFBMhS7VbHjnyMDtNwf4YTgTD9vOPKgRyuVSRXhcBFrud5JBUl0NGIEJyeMgVr3Twb0noWmKxJttwFw20XD3Ty9FZRpEvMHQksFCihYK0=w2400)

</center>

We observe that the first entry in Sites table (with SITE_ID == 1) is "example.com"... We will later change that in production when we'll push to Heroku.

Now, we need to create a new file in our MainApp (Django App that we created at beginning of our project when we ran ./manage.py startapp MainApp), namely ../MainApp/**sitemaps.py**. Here we'll add the followings, we can also refer to the [documentation on Django Sitemaps](https://docs.djangoproject.com/en/3.1/ref/contrib/sitemaps/):

~~~python
# sitemaps.py
from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
from .models import BlogPost

class BlogPostSitemap(Sitemap):
	changefreq = "weekly"

	def items(self):
		return BlogPost.objects.all()

class StaticViewSitemap(Sitemap):
	changefreq = 'monthly'

	def items(self):
		return ['index', 'about', 'contact']

	def location(self, item):
	    return reverse(item)
~~~

Now we need to add our continuingly generated sitemap.xml to our MainApp/**urls.py**. So we need to add these lines:
~~~python
# urls.py
from django.contrib.sitemaps.views import sitemap
from .sitemaps import BlogPostSitemap, StaticViewSitemap

sitemaps = {
    'posts': BlogPostSitemap,
    'static': StaticViewSitemap,
}

urlpatterns = [
    ...
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}),
]
~~~

Good. We can check that sitemap.xml is displayed in our local server by running _python ./manage.py runserver_ and access our _http://localhost:8000/sitemap.xml._

Aaand we are done! almost. Now we can finally push our code to Heroku, in the classic way:

~~~bash
> git status
> git add -A
> git commit -m "Add sitemap.xml to Django App"
> git push heroku master
~~~

But here's the catch... Now when we are trying to access _https://myappname.herokuapp.com/sitemap.xml_ we get an "INTERNAL SERVER ERROR (500)". Also, if we try to access our Sites model in our Admin page, we get the same error. 

But why's that?

When we pushed our code to Heroku, our heroku server calls the "makemigrations" command from our manage.py, but we didn't manually created (wrote any code) to our models.py file, so makemigrations will return _"No changes detected"_, therefore will not run "migrate" command.

So, we need to manually run migrate command from our heroku server. To do that, we simply call in our terminal these commands in our django project folder:
~~~bash
> heroku run bash
$ python manage.py migrate
~~~

And that's all. But now we also need to access again our admin page from our heroku deployed app, and change that first entry from Sites model from _"example.com"_ to _"myappname.herokuapp.com"_. Then, we'll have to run
~~~bash
> heroku restart
~~~

And now we are really done. We can access our sitemap from _myappname.herokuapp.com/sitemap.xml_.

I hope this mini-tutorial will help someone one day. It will certain help me to not struggle again if I encounter again this problem. 

Happy coding,<br/>
R.B.
`,
  },
];

export default BlogData;
