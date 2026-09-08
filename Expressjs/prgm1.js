var exp=require("express")
var app=new exp()

// get method api
app.get("/testfun",(req,res)=>{

    usr=req.query.un;
    pwd=req.query.pwd;
    res.write("<h1>user name:"+usr+"</h1>");
    res.write("<h1>password:"+pwd+"</h1>");
    if(usr=="admin" && pwd=="admin@123")
    {
        res.write("<font color='green' size='7'>valid user</font>");
    }
    else
    {
        res.write("<font color='red' size='7'>invalid user!!!</font>");
    }
    res.end()

}).listen(8991)
console.log("port listening at 8991........")


