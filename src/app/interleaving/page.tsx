import React from 'react'
import SeverComponentOne from '../components/server-component-one'
import ClientComponentOne from '../components/client-component-one'
import ClientComponentTwo from '../components/client-component-two'
const InterleavingPage = () => {
  return (
    <div>
      <h1>Interleaving</h1>
      {/* <SeverComponentOne/> */}
      <ClientComponentOne>
        <SeverComponentOne/>
        <ClientComponentTwo/>
      </ClientComponentOne>
    </div>
  )
}

export default InterleavingPage