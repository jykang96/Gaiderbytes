import React from 'react'
import logo from './../images/logo.jpg';

const navbar = () => {
  return (
    <div className="px-[10%] h-[75px] w-full bg-white fixed top-0 z-10 shadow-md">
        <div className="flex flex-row">
            <img src={logo} className="w-[13%]" alt="Comapny Logo"/><br/>
        </div>
    </div>
  )
}

export default navbar