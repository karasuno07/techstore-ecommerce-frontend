import React, { useState, useRef } from "react"

import { Card } from "react-bootstrap"
import Slider from "react-slick"

import styles from "./ProductCarousel.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slide from "./Slide"
import ControlItems from "./ControlItems"
import ControlButton from "../ControlButton"

const ProductCarousel = ({ data }) => {
   const sliderRef = useRef()
   const [activeIndex, setActiveIndex] = useState(0)
   const [showControl, setShowControl] = useState(false)
   const [forward, setForward] = useState(true)

   const toggleShowControl = (state) => setShowControl(!!state)
   const handlePrevSlide = () => {
      setForward(false)
      sliderRef.current.slickPrev()
   }
   const handleNextSlide = () => {
      setForward(true)
      sliderRef.current.slickNext()
   }

   console.log(data.images)

   const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      slideToShow: 1,
      slideToScroll: 1,
      swipeToSlide: true,
      autoplay: false,
      speed: 500,
      beforeChange(cur, next) {
         setActiveIndex(next)
      },
      appendDots: (dots) => (
         <ControlItems items={dots} activeIndex={activeIndex} forward={forward} />
      ),
      customPaging: (index) => (
         <span className={styles.imageItem}>
            <img src={data.images[index]} alt="" />
         </span>
      ),
   }

   return (
      <Card
         className={styles.wrapper}
         onMouseEnter={toggleShowControl.bind(null, true)}
         onMouseLeave={toggleShowControl.bind(null, false)}>
         {data && (
            <React.Fragment>
               <Slider ref={sliderRef} {...settings}>
                  {data.images.map((image, index) => (
                     <Slide key={index} imageSrc={image} />
                  ))}
               </Slider>
               <ControlButton
                  show={showControl}
                  onPrev={handlePrevSlide}
                  onNext={handleNextSlide}
               />
            </React.Fragment>
         )}
      </Card>
   )
}

export default ProductCarousel
