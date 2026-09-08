const {MongoClient} = require("mongodb")
var exp=require("express")
var app=new exp()
var pw="";
app.get("/updatefun",async(request,res)=>{ 
 var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect();
    const data={"usr":request.query.un};pw:request.query.pwd
    const udata={$set:{"pwd":pw}}
    res.write("<h1>update Record:</h1>");
    try
    {
        const result=await client.db("jsd").collection("login").updateOne(data,udata)
        console.log(result)
        if(result.modifiedCount===1)
        {
            res.write("<h1>Success fully updated</h1>")
        }
        else{
            res.write("<h1>data not found</h1>")
        }
    }

    catch(err){
         console.log("error")
         res.write("<h1>data reading error</h1>")
    }


    res.end()
}).listen(8995)
console.log("port listening at 8995........")


