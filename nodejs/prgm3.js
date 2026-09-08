// callback : asynchronous : server never  waits other process.
var fs=require("fs")
fs.readFile("text.txt",(err,res)=>{
    if(err)
    {
        console.log(res.toString())
    }
    else
    {
        console.log(res.toString())
    }

})
console.log("program end")