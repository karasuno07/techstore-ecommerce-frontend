import React, { useState, useEffect, useRef } from "react"
import Slider from "react-slick"
import { Card } from "react-bootstrap"

import Slide from "./Slide"
import ControlButton from "./ControlButton"
import ControlItem from "./ControlItem"

import styles from "./PromotionCarousel.module.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PromotionCarousel = ({ items }) => {
   const [activeIndex, setActiveIndex] = useState(0)
   const [showControl, setShowControl] = useState(false)
   const [inView, setInView] = useState(true)
   const sliderRef = useRef()

   useEffect(() => {
      const isElementInView = () => setInView(window.scrollY < 450)

      window.addEventListener("scroll", isElementInView)

      return () => window.removeEventListener("scroll", isElementInView)
   }, [])

   const handlePrevSlide = () => sliderRef.current.slickPrev()
   const handleNextSlide = () => sliderRef.current.slickNext()
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
      dotsClass: styles.slickDots,
      beforeChange: (current, next) => {
         setActiveIndex(next)
      },
      appendDots: (dots) => (
         <div>
            {dots.map((item, index) => (
               <ControlItem key={index} active={index === activeIndex} scrollable={inView}>
                  {item.props.children}
               </ControlItem>
            ))}
         </div>
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
