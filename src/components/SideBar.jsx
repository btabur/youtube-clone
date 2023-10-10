import React from 'react'
import {categories} from './../utilis/constants'

const SideBar = () => {
  return (
    <nav className='flex flex-col p-1 md:p-4'>
      {categories.map((item, index)=>(
        <div key={index} >
            <div className='flex items-center gap-2 py-4 px-1 md:px-2 text-sm md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]'>
                {item.icon}
                <span>{item.name}</span>
            </div>
            {/* divider değeri true ise  */}
            {item.divider && <hr/>}
        </div>

      ))}
    </nav>
  )
}

export default SideBar
