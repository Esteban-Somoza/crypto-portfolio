Welcome to the dashboard to track all your holding values.

to configure this v1 you need to make a tokenHoldings.json file inside the database folder and add the token ids and the values for it
You will also need to have node.js installed in your computer and install dependencies through the command "npm i" 

--------------------------------

the program starts at localhost:3001

--------------------------------


If you want this to be running on the computer on the computer at start, follow this instructions:


1) tokens.bat (this will start the program on terminal)

C:/user/folder  --> file location on your computer
npm run dev


2) tokens.vbs (this will start the program on the backgroud)

Set WshShell = CreateObject("WScript.Shell")
WshShell.Run chr(34) & "tokens.bat" & Chr(34), 0
Set WshShell = Nothing 


3) lastly add a shortcut to the tokens.vbs to the startup folder.
To locate the folder you can use windows+R and type shell:startup