//import event
var events=require("events")

//create objects to events emitter
var eventEmitter=new events.EventEmitter();

//bind event (called)
eventEmitter.on("birundha",()=>{
    console.log("events called")
})

//fire event (calling)
eventEmitter.emit("birundha")
