const {MongoClient} = require("mongodb")
var exp=require("express")
var app=new exp()
app.get("/pwfun",async(request,res)=>{
 var client=new MongoClient("mongodb://127.0.0.1:27017/");
    client.connect();
    const data={"usr":request.query.un};
    res.write("<h1>Read all datas from mongodb</h1>");
    try
    {
        const result=await client.db("jsd").collection("login").find(data).toArray()
        console.log(result)
        var len=result.length;

        if(len==1)
        {
            res.write("<h1>"+result[0].pwd+"</h1>")
        }
        else
        {
            res.write("<h1>No.data found!!!</h1>")
        }
    }

    catch{
         console.log("error")
         res.write("<h1>data reading error</h1>")
    }


    res.end()
}).listen(8993)
console.log("port listening at 8993........")


