
import { cookies } from 'next/headers';
import React from 'react'
const AboutPage = () => {
    console.log('server component');
    const cookieStore = cookies()
    const theme = cookieStore.get("theme")
    console.log(theme);
    
    
  return (
    <h1>AboutPage {new Date().toLocaleTimeString()}</h1>
  )
}

export default AboutPage