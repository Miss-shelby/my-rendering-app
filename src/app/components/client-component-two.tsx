"use client"
import React, { useState } from 'react'

const ClientComponentTwo = () => {
  const [name,setName] = useState("Batman")
  return (
    <div> 
      <h1>ClientComponentTwo</h1>
    </div>
  )
}

export default ClientComponentTwo