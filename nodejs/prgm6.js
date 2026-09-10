buf=new Buffer.alloc(250)
console.log(buf);
len=buf.write("welcome to cow")
console.log(len)
console.log(buf)
console.log(buf.toString())