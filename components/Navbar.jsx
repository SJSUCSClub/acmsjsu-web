"use client"
import React from 'react'
import Logo from '@/public/icons/logo.png'
import Image from 'next/image'
import ApplyButton from './ApplyButton'
import GoogleSignInBtn from './GoogleSignInBtn'
import { useSession, SignOut } from 'next-auth/react'
import SignOutBtn from './SignOutBtn'

const Navbar = () => {
  const { status } = useSession()
  return (
    <div className="navbar bg-[#f5f8f1] px-16 py-3 sm:px-8 sm:py-2 flex items-center fixed top-0 left-0 right-0 z-10 shadow-md">
      <Image src={Logo} alt="Logo" width={100} height={100} className="mr-auto sm:w-12 sm:h-auto" />
      {status === 'authenticated' ? (
        <SignOutBtn />
      ) : (
        <div className="flex gap-4 items-center justify-center">
          <ApplyButton />
          <GoogleSignInBtn />
        </div>
      )}
    </div>
  )
}

export default Navbar