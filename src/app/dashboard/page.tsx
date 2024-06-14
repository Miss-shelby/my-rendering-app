"use client"
import React, { useState } from 'react'
const DashboardPage = () => {
    const [name,setName] = useState("")
    console.log(name);
    
  return (
    <>
    <h1>DashboardPage</h1>
    <input type="text" value={name} onChange={((e)=>setName(e.target.value))}/>
    <p>my name is {name}</p>
    </>
  )
}

export default DashboardPage