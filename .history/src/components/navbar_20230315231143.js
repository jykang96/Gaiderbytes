import React from 'react'
import logo from './../images/logo.jpg';

const navbar = () => {
  return (
    <div className="px-[10%] h-[75px] w-full bg-white fixed top-0 z-10 shadow-md">
        <div className="flex flex-row items-center align-middle">
            <div className="w-[13%]">
                <img src={logo} className="" alt="Comapny Logo"/><br/>
            </div>
        </div>
    </div>
  )
}

export default navbar