
import './App.css';
import React  from 'react';
import { test } from './Hello';
import Hello from './Hello';







const PrintName = (Props) =>{
  return <div className={Props.className} onClick={Props.onClick}>i am {Props.name}</div> 
} 
const clicked = ()=>{
  alert("clicked")
}

const app = React.createElement('div', {className:"test" , onClick:(clicked)} , 'Hi', <PrintName onClick={clicked} name={'Kamalarok'} className={'test1'}/>)

function App() {
  return (
    <div>WelCome My React App{app} {test} {Hello}</div>
  );
}

export default App;
