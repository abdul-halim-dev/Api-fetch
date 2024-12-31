import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='bg-slate-500 h-[50px] flex gap-2 items-center justify-center '>
        <Link className='px-4 py-1 bg-active text-secondary text-lg rounded-lg ' to={"/"} > Home </Link>
        <Link className='px-4 py-1 bg-active text-secondary text-lg rounded-lg ' to={"./signup"} > Sign up </Link>
         
    </header>
  )
}
