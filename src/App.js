import React from 'react';
import First from "../src/components/First"
import Logo from "../src/components/Logo"
import './App.css'
export default class App1 extends React.Component{
  state={
    
    
  }
  render (){
    return(
      <div >
        <Logo />
        <div style={{display:'flex', Left:'22px', position:'relative'}}>
          <card />
        </div>
        
      </div>
    );
  }
}


export function App2() {
  return (
    <div style={{backgroundColor:'#ffff', width:'100vw', height:'100vh'}} >
      <span>
        functional components

      </span>

    </div>
  );
}

//export default App2;
