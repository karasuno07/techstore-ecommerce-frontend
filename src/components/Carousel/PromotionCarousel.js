import React, { useState, useRef } from "react"
import Slider from "react-slick"
import { Card } from "react-bootstrap"

import Slide from "./Slide"
import ControlButton from "./ControlButton"

import styles from "./PromotionCarousel.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ControlItem from "./ControlItem"

const Carousel = ({ items }) => {
   const [activeIndex, setActiveIndex] = useState(0)
   const [showControl, setShowControl] = useState(false)
   const sliderRef = useRef()

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
      dotsClass: styles.slickDots,
      beforeChange: (current, next) => {
         setActiveIndex(next)
      },
      // afterChange: (current) => console.log(current),
      appendDots: (dots) => (
         <div className={styles.tabBar}>
            {dots.map((item, index) => (
               <ControlItem key={index} active={index === activeIndex}>
                  {item.props.children}
               </ControlItem>
            ))}
         </div>
      ),
      customPaging: (index) => <span>{items[index].name}</span>,
   }

   const handlePrevSlide = () => sliderRef.current.slickPrev()
   const handleNextSlide = () => sliderRef.current.slickNext()
   const toggleShowControl = (state) => setShowControl(!!state)

   return (
      <Card
         className={styles.wrapper}
         onMouseEnter={toggleShowControl.bind(null, true)}
         onMouseLeave={toggleShowControl.bind(null, false)}>
         {!!items && (
            <Slider ref={sliderRef} {...settings}>
               {items.map((item, index) => (
                  <Slide key={item.id} imageSrc={item.image} />
               ))}
            </Slider>
         )}
         <ControlButton show={showControl} onPrev={handlePrevSlide} onNext={handleNextSlide} />
      </Card>
   )
}

export default Carousel
