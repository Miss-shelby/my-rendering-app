"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from '../components/theme-provider';
import { clientSideFunction } from '../utils/client-utils';
const ClientRoutePage = () => {
    const theme = useTheme()
    const result = clientSideFunction()
    const settings = {
        dots: true,
      };
      return (
        <div className="image-slider-container">
            {/* <h1 style={{color:theme.colors.primary}}>Use theme on client route{result}</h1> */}
            <h2>{result}</h2>
          <Slider {...settings}>
            <div>
              <img src="https://picsum.photos/400/200" />
            </div>
            <div>
              <img src="https://picsum.photos/400/300" />
            </div>
            <div>
              <img src="https://picsum.photos/400/250" />
            </div>
            <div>
              <img src="https://picsum.photos/400/350" />
            </div>
          </Slider>
       </div>
      )
}

export default ClientRoutePage
//to consume our theme in client page/route