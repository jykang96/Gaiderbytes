import React from 'react'
import logo from './../images/logo.jpg';

const navbar = () => {
  return (
    <div className="px-[10%] h-[75px] w-full bg-white fixed top-0 z-10 shadow-md">
        <div className="flex flex-row items-center h-full justify-between">
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
            <button className="h-[42px] px-[8px] bg-[#E2E8F0] font-[600] text-[16px] text-[#172E38]">
                Apply Now
            </button>
        </div>
    </div>
  )
}

export default navbar