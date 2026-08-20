












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
