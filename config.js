const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://wa.me/message/6KY2PBZF4YC3E1";
global.gurl  =process.env.GURL  || "https://wa.me/message/6KY2PBZF4YC3E1";
global.website=process.env.GURL || "https://wa.me/message/6KY2PBZF4YC3E1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "POWERED BY *SAMCOMMS_INTERNET_SERVICES* " 


global.devs = "2347042980542" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347042980542";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347042980542,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_00_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDczLFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYwLFxuICAgICAgICA0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgMTE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDU4LFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDcwLFxuICAgICAgICA4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4LFxuICAgICAgICA5MixcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidHZ2Y2FXNHl0R1NzamM3b1ZSYVM3RlJ6WkJrMU5rZzUyZC90SXEvNnJ3TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDQyOTgwNTQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMThFRkI5NEVEN0Q1NUI4MTZEODQzNkYyODhBRTVEMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA2MTI4MTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZkJfVTQ3R0tSRkNqVmdpNHFianh1UVwiLFxuICBcInBob25lSWRcIjogXCJmODJjYzk3ZS1iMTI5LTQxNTMtOWM5NS1hYTQyNDVhODRmOGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAxMzcsXG4gICAgICAyMjcsXG4gICAgICAyMzYsXG4gICAgICAxNTMsXG4gICAgICA5LFxuICAgICAgMTgsXG4gICAgICAyNDgsXG4gICAgICAxNTYsXG4gICAgICA4MyxcbiAgICAgIDEwNixcbiAgICAgIDg1LFxuICAgICAgNzAsXG4gICAgICA4NSxcbiAgICAgIDI0NSxcbiAgICAgIDE2MCxcbiAgICAgIDUyLFxuICAgICAgOTQsXG4gICAgICAyMTcsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDE5NyxcbiAgICAgIDczLFxuICAgICAgNSxcbiAgICAgIDg1LFxuICAgICAgMjIyLFxuICAgICAgMTIxLFxuICAgICAgMTEsXG4gICAgICA1MyxcbiAgICAgIDEwNSxcbiAgICAgIDE5MyxcbiAgICAgIDEyMyxcbiAgICAgIDE2MSxcbiAgICAgIDY0LFxuICAgICAgODEsXG4gICAgICA1LFxuICAgICAgNDQsXG4gICAgICA1OSxcbiAgICAgIDExMSxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNDV1pMM0ROXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQyOTgwNTQyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTI5NzcyNjQ5Mjc1NDoxMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJhZGV4XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUNTaTk4SEVNYnZ1YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3N3BVbzJ5K01rbjZ2am1ydSszK05vN0k2SVVwV2VRTGEyc1h1cWJhZVNvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjF3Z0NWam1nL05pNG8wNDFJdEREcDc2ZXE2QmtPVS92bDlqWkxkT0wyQnc3ZS9TTEZhU2ZnVXZhdzhFS0RaU0VsVTJycVdwNXRITU8ySC9GekZmUUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1wMjY0V1pIeGhwcGNkcjEwVEI1QUFVWGtpZUh3N0NNbmg0ZWdnWitPT0kwcHNub0FjbjFjTDQzYmk3TjU5amZENlJydVQ4UFRsMEJ5NWpxZXFLQ0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDI5ODA1NDI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYxMjgxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQ5WFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDlYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK255U2VKeW9zdWhYcjRIeitJYzQ5STVwSk5mdWZTcmk2UnE3MkprYnVZOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDc4NDYwMjI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MTI4MTI4NzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Adex😌",
  packname: process.env.PACK_NAME || "Adex😌",
  botname : process.env.BOT_NAME  || "'Adex😌' *BOT*",
  ownername:process.env.OWNER_NAME|| "Adex😌",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
