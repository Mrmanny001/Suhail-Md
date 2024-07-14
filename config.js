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
global.caption = process.env.CAPTION || global.caption || " `POWERED BY SAMCOMMS ☑️` " 


global.devs = "2349112040503" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349112040503";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349112040503,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_00_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICA5MixcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkwLFxuICAgICAgICA4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgODMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDcwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM4LFxuICAgICAgICA2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgMTc0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0LFxuICAgICAgICAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRkllSVBGSXRoazREb1BSREJwWk9YbXFHU0tDN05IZmw2bHpQNVI3N29qOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVmJxV1FsUkhTNk91WEcwTFB1VlNWd1wiLFxuICBcInBob25lSWRcIjogXCIzOGIyOTZhMy1kNDk0LTRmOGQtOGVhMi1kOGFlMWQzOTE1NGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICA0LFxuICAgICAgMzIsXG4gICAgICAyMDUsXG4gICAgICAxMzYsXG4gICAgICAyMyxcbiAgICAgIDE4MSxcbiAgICAgIDc0LFxuICAgICAgMTYzLFxuICAgICAgNjAsXG4gICAgICAyMzksXG4gICAgICAxMDMsXG4gICAgICAyMjgsXG4gICAgICAxMjAsXG4gICAgICA3OCxcbiAgICAgIDE3NSxcbiAgICAgIDUwLFxuICAgICAgMjExLFxuICAgICAgMTE1LFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMjI2LFxuICAgICAgMTM4LFxuICAgICAgMjIwLFxuICAgICAgMCxcbiAgICAgIDczLFxuICAgICAgOSxcbiAgICAgIDYxLFxuICAgICAgMTY3LFxuICAgICAgNjMsXG4gICAgICA3MCxcbiAgICAgIDIwMyxcbiAgICAgIDEwMixcbiAgICAgIDE5NixcbiAgICAgIDUsXG4gICAgICA2NSxcbiAgICAgIDE5NCxcbiAgICAgIDc1LFxuICAgICAgMTg0LFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUUxNEJIOUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTIwNDA1MDM6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTQU1DT01NUyBJTlRFUk5FVCBTRVJWSUNFU1wiLFxuICAgIFwibGlkXCI6IFwiMTI2MDY2MTMxNzc5NzY3OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l1UThzMEZFSTdzbnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidUpHVmR2QldOWXdZWlRhK1c4MG9jcHRCcklsYXpFRm1uWGlTMDFINS9sRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvRHhXS2ZkNmNLbk5hWENmUTM4aUdhMnY1N0JTMDJYSTJOMmdyWk9KLzVCTCtBSWdJZTFsbGdLVVlxRHNZUDhITTFGRGJXTkY5OHU2M1hNMy9wRTdCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyTDJ6WHYvSmFjT3hxQi9VN3Fvd0dybUpSRllVNG4vNjdtTXZxRTh3ZE5PSjBEek1VZWNTdkhRM0krVnNkU215OEQ2czBMcFF6bFpYaGNrUHZtbVFBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTEyMDQwNTAzOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE3MDAwMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlLa1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUtrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT0NkNjUwdTM2ZU9wTWtsd2dBemtOYVdBeGd0LzBOQmhiZW11YWtnWXZxaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTA1NTI3ODE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMTY5NjU3NTgzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『`POWERED BY SAMCOMMS ☑️`』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "samcommsbot",
  ownername:process.env.OWNER_NAME|| "SAMCOMMS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "LUFFY"  ).toUpperCase(),



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
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "online", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
