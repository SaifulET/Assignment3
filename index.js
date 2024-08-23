const http=require("http");
const fs=require("fs");

const server=http.createServer(function(req,res){
    if(req.url=="/"){
        res.end("This is Home Page")
    }
    if(req.url=="/contact"){
        res.end("This is Contact Page")
    }
    if(req.url=="/about"){
        res.end("This is about Page")
    }
    if(req.url=="/file-write"){
      fs.writeFile('demo.txt', 'Hello world',(err)=> {
        if(!err){
            res.end("Successfully file created!");
        }
        else{
            res.end(err)
        }
      });
    }
})
server.listen(5500,()=>{
    console.log("server running to the port 5500");
})