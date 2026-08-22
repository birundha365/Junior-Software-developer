import React from 'react'

function App() {
  let dis=()=>{
    var tags=document.getElementsByTagName("input")
    var size=tags.length;
    document.getElementById("r1").innerHTML="count of textbox:"+size;
    var sum=0;
    for(var i=0;i<size;i++)
    {
      sum=sum+parseInt(tags[i].value);
    }
    document.getElementById("res").innerHTML=sum+"is total";
  }
  return (
    <div>
      <input type='text' placeholder='Enter number 1'></input><br></br>
      <input type='text' placeholder='Enter number 2'></input><br></br>
      <input type='text' placeholder='Enter number 3'></input><br></br>
      <input type='text' placeholder='Enter number 4'></input><br></br>
      <input type='text' placeholder='Enter number 5'></input><br></br>
      <input type='text' placeholder='Enter number 6'></input><br></br>
      <input type='text' placeholder='Enter number 7'></input><br></br>
      <input type='text' placeholder='Enter number 8'></input><br></br>
      <input type='text' placeholder='Enter number 9'></input><br></br>
      <input type='text' placeholder='Enter number 10'></input><br></br>
      <button onClick={dis}>clickme</button>
      <div id="r1"></div>
      <div id='res'></div>
       </div>
  )
}
export default App

















/*import React from 'react'

function App() {
  const dis=(Event)=>{
    document.getElementById("res").innerHTML="You are working currently:"+Event.target.type;
  }
  return (
    <div>
      <input type="text" onChange={dis}></input><br></br> 
      <input type="number" onChange={dis}></input><br></br>
      <input type="password" onChange={dis}></input><br></br>
      <input type="radio" name="g" onChange={dis}></input>Male
      <input type="radio" name="g" onChange={dis}></input>female<br></br>
      <input type="checkbox" onChange={dis}></input>c
      <input type="checkbox" onChange={dis}></input>c++
      <input type="checkbox" onChange={dis}></input>Javz<br></br>
      <div id="res"></div>
    </div>
  )
}export default App













/*import React from 'react'

function App() {
  const dis=(Event)=>{
    document.getElementById("res").innerHTML=Event.target.id+"......typing"
  }
  return (
    <div>
      <input type="text" onChange={dis} id="textbox 1" placeholder='textbox 1'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 2" placeholder='textbox 2'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 3" placeholder='textbox 3'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 4" placeholder='textbox 4'></input>
      <br></br>
      <input type="text" onChange={dis} id="textbox 5" placeholder='textbox 5'></input>
      <br></br>
      <div id ="res"></div>
    </div>
    
  )
}
export default App

/*import React from 'react'

function App() {
   const dis=()=>{
    var a=parseInt(document.getElementById("t1").value);
    var b=parseInt(document.getElementById("t2").value);
    var c=a+b;
    document.getElementById("res").innerHTML="Total:"+c;
   }
  return (
    <div>
      <input type="text" id="t1" placeholder='enter no.1'></input>
      <input type="text" id="t2" placeholder='enter no.2'></input>
      <br></br>
      <input type="button" onClick={dis} value="find total"></input>
      <div id="res"></div>
    </div>
    
  )
}
export default App

/*import React from 'react'

function App() {
  const dis1=()=>{
    document.getElementById("res").innerHTML="cursor outside textbox";
    document.getElementById("t1").style.backgroundColor="pink";
    }
    const dis2=()=>{
    document.getElementById("res").innerHTML="cursor inside textbox";
    document.getElementById("t1").style.backgroundColor="blue";
    }
  return (
    <div>
      <input type="text" id="t1" onBlur={dis1} onfocus={dis2}
      placeholder='Enter your text'></input>
      <div id="res"></div>
    </div>
  )
}
export default App

    
  














/*import React from 'react'

function App() {
  const dis=(Event)=>{
    var data=Event.target.value;
    document.getElementById("res").innerHTML=data+"......typing"
  }
  return (
    <div>
      <h1>React Events</h1>
      <input type="text" onChange={dis} placeholder='enter text'></input>
      <br></br>
      <div id="res"></div>
    </div>
    
  )
}
export default App


/*import React from 'react'
function App() {
 return (
   <form>
     <h1>React Forms:</h1>
     <input type="text" id="t1" placeholder="Enter Mark:1"></input>
     <br></br>
     <input type="text" id="t2" placeholder="Enter Mark:2"></input>
     <br></br>
     <input type="text" id="t3" placeholder="Enter Mark:3"></input>
     <br></br>
     <input type="text" id="t4" placeholder="Enter Mark:4"></input>
     <br></br>
     <input type="text" id="t5" placeholder="Enter Mark:5"></input>
     <br></br>
     <label>Select gender</label>
     <input type="radio" id="r1" name="gen"></input>Male
     <input type="radio" id="r1" name="gen"></input>female
     <input type="radio" id="r1" name="gen"></input>others
     <br></br>
     <label>Select courses</label>
     <input type="checkbox" id="c1"></input>c
     <input type="checkbox" id="c2"></input>c++
     <input type="checkbox" id="c3"></input>java
     <input type="checkbox" id="c4"></input>python
     <br></br>
     <label>Select Color:</label>
     <input type="Color" id="col"></input>
     <br></br>
     <label>Select date:</label>
     <br></br>
     <label>Select Time:</label>
     <input type="time" id="t1"></input>
     <br></br>
     <label>Upload photo:</label>
     <input type="file" id="f1"></input>
     <br></br>

     <input type="button" value="clickhere"></input>
     <input type="submit" value="submit button"></input>
     <input type="reset" value="clear"></input>
     <button>click here</button>

   </form>
  )
}
export default App


/*import React from 'react'

function App(props){
  var arr=[]
  for(var k in props.data)
  {
    arr.push(k);
  }

  return(
    <div>
      <h1>json with array handling and also check null</h1>
      <h2>Roll number:{props.data.rno}</h2>
      <h2>Name:{props.data.sname}</h2>
      <h2>mark1:{props.data.marks[0]}</h2>
      <h2>mark2:{props.data.marks[1]}</h2>
      <h2>mark3:{props.data.marks[2]}</h2>
      <h3>Result:{(props.data.marks[0]>34 && props.data.marks[1]>34 && props.data.marks[2]>34)?props.data.result="PASS":props.data.result="FAIL"}</h3>
      <h1>=================================================================</h1>
      {arr.map((item)=><><br></br>{item}--&gt; {props.data[item]}</>)}
      
      
      
    </div>
  )
}
export default App




/*import React from 'react'

/*function App(props){
  var arr=[]
  for(var k in props.data)
  {
    arr.push(k);
  }

  return(
    <div>
      <h1>Props using Array</h1>
      <h2>student number:{props.data.rno}</h2>
      <h2>student name:{props.data.sname}</h2>
      <h2>student mark:{props.data.mark}</h2>
      <h2>student result:{props.data.result}</h2>
      <h2>student eligible:{props.data.iseligible?"eligible":"not eligible"}</h2>
       
      <br></br>
      <h2>========================================================</h2>
      {arr.map((v)=><h2>{v}---&gt; {props.data[v]}</h2>)}
      <h2>========================================================</h2>
      {arr.map((v)=><h2>{v}---&gt; {(props.data[v]===true && "eligible")||(props.data[v]===false && "Not eligible")||props.data[v]}</h2>)}
      
      
      
    </div>
  )
}
export default App
  









/*import React from 'react'

function App(props) {
  return (
    <div>
      <h1>props using Array</h1>
      <h2>Test first mark:{props.data[0]}</h2><br></br>
       {props.data.map((item,index)=><><br></br>mark:{index+1}={item}</>)} 
    </div>
  )
}
export default App

/*import React from 'react'

function App(props) {
  return (
    <div>
      <h1>props:properties</h1>
      <h2>share data from one component to another component</h2>
      <h2>Your Name:{props.data}</h2>
    </div>
  )
}
export default App

/*import React from 'react'

function App() {
  return (
     <div>
      <img src=""  alt="" />
      <h3>html</h3>
      <p>This is my html</p>
      <div class="card"></div>
      <img src="brins d.jpeg" alt="brins d.jpeg"></img>
     </div>
  )
}
export default App

/*import React from 'react'

function App() {
  var student = {
    sno: 1001,
    sname: "Birundha",
    age: 20,
    department: "MCA"
  }

  return (
    <div>
      <h1>Student Details</h1>

      <h2>Student No: {student.sno}</h2>
      <h2>Name: {student.sname}</h2>
      <h2>Age: {student.age}</h2>
      <h2>Department: {student.department}</h2>
    </div>
  )
}

export default App

/*import React from 'react'
 function App() {
  var stud={
    sno:1001,
    sname:'Birundha',
    mark:{
      tamil:99,
      english:99,
      maths:100,
      science:100,
      social:100
    },
    rank:1,
   result:"pass"
  }
  return (
    <div>
      <h1>JSON</h1>
      <h2>student number:{stud.sno}</h2>
      <h2>student name:{stud.sname}</h2>
      <h2>student tamil mark:{stud.mark["tamil"]}</h2>
      <h2>student english mark:{stud.mark["english"]}</h2>
      <h2>student maths mark:{stud.mark["maths"]}</h2>
      <h2>student science mark:{stud.mark["science"]}</h2>
      <h2>student social mark:{stud.mark["social"]}</h2>
      <h2>student rank:{stud.rank}</h2>
      <h2>student.result:{stud.result}</h2>
    </div>
  )
}
export default App;


/*import React from 'react'
function App() {
  var stud={
    sno:1001,
    sname:'Birundha',
    mark:98,
    rank:1,
    result:"pass"
  }
  return(
    <div>
      <h1>Json</h1>
      <h2>student number:{stud.sno}</h2>
      <h2>student name:{stud.sname}</h2>
      <h2>student mark:{stud.mark}</h2>
      <h2>student rank:{stud.rank}</h2>
      <h2>student result:{stud.result}</h2>
    </div>
  )
}
export default App


/*import React from 'react'

function App() {
  var arr = [11, 83, 40, 78, 100];
  var lowest = 100;

  return (
    <div>
      <h3>Array Demo</h3>

      {arr.map((item) => <span>{item}</span>)}

      <br/>

      {arr.map((item) => <>{item}</>)}

      {arr.map((item) => <><br />{item}</>)}

      <ol type="A">
        {arr.map((v) => <li>{v}</li>)}
      </ol>

      <div style={{ display: "none" }}>
        <h1>Lowest number of array</h1>

        {arr.map((v) => <>{lowest < v && <>{lowest = v}</>}</>)}
      </div>

      <h1>Lowest number: {lowest}</h1>
    </div>
  )
}

export default App

/*
import React from 'react'
function App()
{
  var arr=[11,83,40,78,100]
  return (
    <div>
      <h3>Array Demo</h3>
      
       {arr.map((item)=>item)}
       <br></br>
       {arr.map((item)=><> {item}</>)}
       {arr.map((item)=><><br></br>{item}</>)}
       <ol type="A">
        {arr.map((v)=><li>{v}</li>)}
       </ol>
      
    </div>
  )
}export default App;

/*
import React from 'react'

function App() {
  var arr=[11,22,33,44,55,66,77,88]
  return (
    <div>
      <h1>Array demo</h1>
      {arr.map((item)=>item)}
      <br></br>
      {arr.map((item)=><>{item}</>)}
      {arr.map((item)=><><br></br>{item}</>)}
      <ol type='A'>
        {arr.map((v)=><li>{v}</li>)}
      </ol>
    </div>
  )
}
export default App;

/*
import React from 'react'

function App() {
  var arr=[11,12,13,14,15,16];
  return (
    <div>
      <h1>Array demo</h1>
      <h2>Array value index:0:{arr[0]}</h2>
      <h2>Array value index:1:{arr[1]}</h2>
      <h2>Array value index:2:{arr[2]}</h2>
      <h2>Array value index:3:{arr[3]}</h2>
      <h2>Array value index:4:{arr[4]}</h2>
      <h2>Array value index:5:{arr[5]}</h2>
    </div>
  )
}
export default App 

/*import React from 'react'

function App() {
  var avg = 75;
  var res = "pass";

  return (
    <div>
      <h1>Grade System in Nested If</h1>

      <h2>
        {res === "pass" &&
          ((avg >= 85 && "Outstanding") ||
            (avg >= 75 && "Excellent") ||
            (avg >= 65 && "Very Good") ||
            (avg >= 55 && "Good") ||
            "Fair")}
      </h2>

      <h2>{res === "fail" && "Fail"}</h2>
    </div>
  )
}

export default App

/*
import React from 'react'

function App () {
  var avg=85;
  
  return (
   <div>
     <h1>Grade system</h1>
     <h2>{(avg>=85 && "Outstanding")||
     (avg>=75 && "Excellent")||
     (avg>=65 && "Very good")||
     (avg>=55 && "Good")
     ("Fair")}
     </h2>      
    </div>
  )
}
export default App

/*
import React from 'react'

function App() {
  var n=5;
  return (
    <div>
      <h1>3.If else If statement or else If ladder</h1>
      <h2>{n} is {(n>0 && "+ve") ||(n<0 && "-ve")||"zero"}</h2>
    </div>
  )
}
export  default App
/*

/*
import React from 'react'

 function  App() {
  var n = 2022;
  return (
    <div>
      <h1>Find the given year leap or not</h1>
      <h2>number: {n}</h2>
      <h2>{(n% 4=== 0 &&"leap") || "not"}</h2>
    </div>
    
  )
}
export default App
/*
/*
import React from 'react'

function App() {
  var num = 39;

  return (
    <div>
      <h1>Find the given number even or odd</h1>
      <h2>Number: {num}</h2>
      <h2>{num % 2 === 0 ? "Even Number" : "Odd Number"}</h2>
    </div>
  )
}
  /*


export default App

/*import React from 'react'

function App() {
  var mark=37;
  return (
    <div>
      <h1>mark :{mark}</h1>
      <h2>1.simple  if statement result:</h2>
      <h2>{mark>34 && "PASS"}</h2>
      <h2>{mark<35 && "FAIL"}</h2>

    </div>
  )
}
export default App
/*

/*function App()
{
  return(
    <>
    <h1>Welcome to reactjs</h1>
    <h1>Welcome to reactjs</h1>
    <h1>Welcome to reactjs</h1>
    </>
  )
}
export default App;
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
