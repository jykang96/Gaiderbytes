import React from 'react'
import logo from './../images/logo.jpg';

const navbar = () => {
  return (
    <div className="px-[10%] h-[75px] w-full bg-white fixed top-0 z-10 shadow-md">
        <div className="flex flex-row items-center align-middle h-full">
            <div className="flex flex-row items-center">
                <img src={logo} className="w-[135px] mr-[64px]" alt="Comapny Logo"/><br/>
                <div className="flex flex-row font-[600] text-[16px] leading-[22px] gap-[32px]">
                    <div>
                        Home
                    </div>
                    <div>
                        About Us
                    </div>
                    <div>
                        Contact Us
                    </div>
                    <div>
                        Coaches
                    </div>
                    <div>
                        Students
                    </div>
                    <div>
                        Donate
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default navbar