import React from 'react'

const navbar = () => {
  return (
    <div className="px-[10%] h-[75px] w-full bg-white fixed top-0 z-10 shadow-md">
        <div className="flex flex-row">
            <img src={logo} className="w-300 h-100" alt="Comapny Logo"/><br/>
        </div>
    </div>
  )
}

export default navbar