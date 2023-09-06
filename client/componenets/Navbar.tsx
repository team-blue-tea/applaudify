import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        
          <Link href='/home' className='nav-link' >Home</Link>
          <Link href='/contact' className='nav-link' >Contact Us</Link>
          <Link href='/login' className='nav-link' >Login</Link>
      </nav>
    </>
  )
}
