const http = require("http");
const fs= require("fs");


const myserver = http.createServer( (request, response)=>{
    response.writeHead(200, { 'Content-Type': 'text/html'})
    var myurl = request.url;

    if(myurl === "/form") {
        //response.write("<h2> Form Page </h2>")
        const c1= fs.readFileSync("./htmlpages/form.html")
        response.write(c1)
    }
    // else if(myurl === "/about"){
    //     response.write("<h2>ABout page</h2>")
    // }
    // }else if(myurl === "/services"){
    //     //response.write("<h2>Service Page</h2>")
    //     const c2= fs.readFileSync("./service.html")
    //     response.write(c2)
    // }else if(myurl === "/contact"){
    //     //response.write("<h2>Contact Page</h2>")
    //     const c3= fs.readFileSync("./contact.html")
    //     response.write(c3)
    else if(myurl === "/register")
    {
        response.write("<h1>Registration done</h1>")
    }

    else {
        const c1= fs.readFileSync("./htmlpages/starting.html")
        response.write(c1)
        //response.write("<h2>Server Worked</h2>  <p>"+ myurl +"</p>")
    }
    response.end();
})

myserver.listen(5001);
myserver.on("connection", (result)=>{
    console.log("Connection Established");
})