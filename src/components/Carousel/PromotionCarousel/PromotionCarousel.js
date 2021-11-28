import React, { useState, useRef } from "react"
import Slider from "react-slick"
import { Card } from "react-bootstrap"

import Slide from "./Slide"
import ControlButton from "../ControlButton"
import ControlItems from "./ControlItems"

import styles from "./PromotionCarousel.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PromotionCarousel = ({ items }) => {
   const [activeIndex, setActiveIndex] = useState(0)
   const [forward, setForward] = useState(true)
   const [showControl, setShowControl] = useState(false)
   const sliderRef = useRef()

   const handlePrevSlide = () => {
      setForward(false)
      sliderRef.current.slickPrev()
   }
   const handleNextSlide = () => {
      setForward(true)
      sliderRef.current.slickNext()
   }
   const toggleShowControl = (state) => setShowControl(!!state)

   const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      slideToShow: 1,
      slideToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      beforeChange: (current, next) => {
         setActiveIndex(next)
      },
      appendDots: (dots) => (
         <ControlItems items={dots} activeIndex={activeIndex} forward={forward} />
      ),
      customPaging: (index) => <span>{items[index].name}</span>,
   }

   return (
      <Card
         className={styles.wrapper}
         onMouseEnter={toggleShowControl.bind(null, true)}
         onMouseLeave={toggleShowControl.bind(null, false)}>
         {!!items && (
            <React.Fragment>
               <Slider ref={sliderRef} {...settings}>
                  {items.map((item, index) => (
                     <Slide key={item.id} imageSrc={item.image} />
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

export default PromotionCarousel
