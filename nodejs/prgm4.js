//import event
var events=require("events")

//create objects to events emitter
var eventEmitter=new events.EventEmitter();

//bind event (called)
const dis=()=>{
    console.log("events called")
}
eventEmitter.on("birundha",dis)

//fire event (calling)
eventEmitter.emit("birundha")
