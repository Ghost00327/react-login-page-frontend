import React, { Component } from 'react';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AutoComplete from './AutoComplete';

class RightMain extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#1c2232'}} className="pr-10">
          <div className="mt-24 pb-2">
            <p style={{color:'#858e9d'}} className="pb-8">WALLET ADDRESS FOR AUTO WITHDRAW</p>
            <div className="relative">
              <input placeholder="Adress"  style={{backgroundColor:'#222a3d', border:'solid 2px #393e51'}} className="rounded-md w-72 h-10 border-3 p-4 mr-4 pl-8"/>
              <div className="absolute w-7 h-100 p-2 rounded-tl-md  rounded-bl-md top-0" style={{background:'#dec7c742'}}>
                <FontAwesomeIcon className="text-white top-6 left-3" icon={faUser} />
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="relative">
              <input placeholder="Name"  style={{backgroundColor:'#222a3d', border:'solid 2px #393e51'}} className="rounded-md w-72 h-10 border-3 p-4 mr-4 pl-8"/>
              <div className="absolute w-7 h-100 p-2 rounded-tl-md  rounded-bl-md top-0" style={{background:'#dec7c742'}}>
                <FontAwesomeIcon className="text-white top-6 left-3" icon={faUser} />
              </div>
            </div>
          </div>
          <div className="py-2">
            <input placeholder="Balance to use"  style={{backgroundColor:'#222a3d', border:'solid 2px #393e51'}} className="rounded-md rounded-tr-none rounded-br-none w-64 h-10 border-3 pl-4 pr-0"/>
            <span className="w-7 h-12 p-2 rounded-tr-md  rounded-br-md text-white" style={{background:'#dec7c742', border:'solid 2px #393e51'}}>%</span>
          </div>
          <div className="py-2">
          <input placeholder="Amount to follow"  style={{backgroundColor:'#222a3d', border:'solid 2px #393e51'}} className="rounded-md rounded-tr-none rounded-br-none w-64 h-10 border-3 pl-4 pr-0"/>
            <span className="w-7 h-12 p-2 rounded-tr-md  rounded-br-md text-white" style={{background:'#dec7c742', border:'solid 2px #393e51'}}>+</span>
          </div>
          <div className="py-2 pb-20">
            <button style={{background:'#7b5be3'}} className="rounded-md py-2 px-8 text-white mx-auto ml-20">Add</button>
          </div>
          <AutoComplete />
      </div>
    );
  }
}

export default RightMain;
