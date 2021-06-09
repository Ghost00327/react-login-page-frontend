import React, { Component } from 'react';

class SecondLogin extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#1c2232'}} className="flex flex-col items-center justify-center py-12 px-4 pt-32 pb-52 sm:px-6 lg:px-8">
        <div className="pt-16 pb-3">
          <p style={{color:'#858e9d'}} className="py-2">METAMASK ADRESS</p>
          <input placeholder="Placeholder"  style={{backgroundColor:'#222a3d', border:'solid 2px #393e51'}} className="rounded-md w-72 h-8 border-3 p-4"></input>
        </div>
        <div className="pb-1">
          <p style={{color:'#858e9d'}} className="pb-2">METAMASK PRIVATE KEY</p>
          <input placeholder="Placeholder"  style={{backgroundColor:'#222a3d', border:'solid 2px #393e51'}} className="rounded-md w-72 h-8 border-3 p-4"></input>
        </div>
        <p style={{color:'#858e9d'}} className="text-xs pb-3">Make sure the address and private key matches'</p>
        <div className="py-8">
          <a href="/home" style={{background:'#7b5be3'}} className="rounded-md py-3 px-8 text-white" >Login</a>
        </div>
    </div>
    );
  }
}

export default SecondLogin;
