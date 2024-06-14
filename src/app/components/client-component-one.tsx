"use client"
import React, { useState } from 'react'
import ClientComponentTwo from './client-component-two'

const ClientComponentOne = ({children}:{children:React.ReactNode}) => {
  const [name,setName] = useState("Batman")
  return (
    <div> 
      <h1>ClientComponentOne</h1>
      {children}
    </div>
  )
}

export default ClientComponentOne
//to render server component here,we pass it as children props