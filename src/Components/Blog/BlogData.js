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
    content: ``,
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
    content: ``,
  },
];

export default BlogData;
