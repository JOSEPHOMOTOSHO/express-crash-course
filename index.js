 
 //get express
 const express = require('express')

 //get path (a module in node.js that handles file paths)
 const path = require('path')

 

 //import our logger
 const logger = require('./middleware/logger')
 //import our members
 const members = require('./public/members')

//initialize express and store in app variable
 const app = express ();

 const PORT = process.env.PORT || 5000
 /*lOOK AT THE ENVIRONMENT VARIABLES AND LOOK FOR THE ONE CALLED PORT
 WHEN YOU DEPLOY, THE SERVER MAY NOT USE PORT 5000 
 IT MAY ONE TO CHECK THE ENVIRONMENT VARIABLE THAT SAYS "PORT" FIRST, IF THATS
 NOT AVAILABLE THEN WE WANT TO RUN ON PORT 5000
 */

 
//  //init or utilize our middleware
//  app.use(logger)

 
 //This route gets all members
app.get("/api/members", (req,res)=> res.json(members))


/* Making a static server. A server where you rquest for certain kind of files 
like html,css, images e.t.c
*/
app.use(express.static(path.join(__dirname,"public")))



//  /*Join the path together i guess. get to a directory name called public and
//  get the file called index.html*/
// app.get("/", (req,res)=> {
//     res.sendFile(path.join(__dirname,"public","index.html"))
// })



//  //get request to our index or "/" route
//  app.get('/',(req,res)=>{
//      res.send("<h1>Hello World</h1>")//response should display "Hello world"
//  })


 app.listen(PORT,()=>console.log(`server running on ${PORT}`))
 //port to listen to for get request to work













 /*index.js sometimes called server.js, app.js (doesnt really matter) is a file
 that reps our main server entry point
 */ 