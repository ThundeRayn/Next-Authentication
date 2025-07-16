"use client";
import { login } from '@/src/lib/actions/auth';
import React from 'react'

const SignInButton = () => {
  return (
    <button onClick={()=>login()}>
            Sign In with Github</button>
  )
}

export default SignInButton;