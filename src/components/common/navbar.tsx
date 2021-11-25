import React from 'react'
import 'tailwindcss/tailwind.css'
import SignIn from '../sign/SignIn'

function Navbar({...props}: any) {
  return (
    <header>
      <SignIn />
    </header>
  )
}

export default Navbar