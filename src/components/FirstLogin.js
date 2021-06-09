import React, { Component } from 'react';


class FirstLogin extends Component {
  render() {

    return (
      <div style={{backgroundColor:'#1c2232'}} className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div>
        <h2 className="mt-6 text-center text-3xl text-white">Login</h2>
        </div>
        <div className="pt-16 pb-3">
          <p style={{color:'#858e9d'}} className="py-2">SERIAL KEY</p>
          <input placeholder="Placeholder"  style={{backgroundColor:'#222a3d', border:'solid 2px #393e51'}} className="rounded-md w-72 h-8 border-3 p-4"></input>
        </div>
        <div >
        <button style={{background:'#7b5be3'}} className="rounded-md py-3 px-8 text-white">Login</button>
        </div>
      </div>
  
    );
  }
}

export default FirstLogin;
