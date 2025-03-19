import React from 'react'

const Header = () => {
  return (
    <div className='absolute pt-3 h-16 w-screen items-center justify-center '>
    <div className='relative mr-auto ml-auto rounded-full h-16 w-39 bg-neutral-950 inset-shadow-sm inset-shadow-neutral-700'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    </div>
  )
}

export default Header