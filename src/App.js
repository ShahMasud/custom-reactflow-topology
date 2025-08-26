import React, { useState } from 'react';
import './App.css';
import Flow from './components/ReactFlow';
import { DatePicker } from 'antd';
import moment from 'moment';

function App() {
 
 
//   const demo = ()=>{
//   const data = { a: "masood", obj: { b: "shah" }, arr: [{ c: "hasaan" }, { d: "new" }] };

// const { a, obj: { b }, arr: [, { d }] } = data;

// console.log("a:", a); // Output: a:
// console.log("b:", b); // Output: b:
// console.log("d:", d); // Output: d:  
//   }
//   demo();


  return (
    <div className="App">
      
      <Flow/>
    </div>
  );
}

export default App;
