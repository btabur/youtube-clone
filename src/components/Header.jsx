import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch, AiFillBell, AiFillVideoCamera} from 'react-icons/ai'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4'>
      <Link className='flex items-center gap-4'>
        <img className='w-[50px]' src="/youtube-logo.png" alt="" />
        <h1 className='text-2xl font-bold hidden md:block'>YouTube</h1>
      </Link>

      <form className='flex justify-between items-center border border-gray-400 rounded-[20px] overflow-hidden'>
        <input className='outline-none  py-1 px-3 bg-[#201f20]' type="text" />
        <button className='border-l px-2'>
          <AiOutlineSearch/>
        </button>
      </form>

      <div className='flex gap-3 text-xl cursor-pointer'>
      <AiFillBell/>
      <AiFillVideoCamera/>
      </div>
    </header>
  )
}

export default Header
