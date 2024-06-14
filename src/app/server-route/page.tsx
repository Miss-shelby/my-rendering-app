import React from 'react'

import { serverSideFunction } from '../utils/server-utils'
import { ImageSlider } from '../components/image-slider';

const ServerRoutePage = () => {
    console.log("server route rendered");
    
    const result =serverSideFunction()
  return (
    <div>
      <p>ServerRoutePage </p>
      <ImageSlider/>
      {result}
    </div>
  )
}

export default ServerRoutePage


//to make our server functions server side only we can use server only package 
//npm i server-only,then import server only on sever functions