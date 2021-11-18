import React from "react"
import PromotionCarousel from "components/Carousel/PromotionCarousel"
import CategoryBar from "components/CategoryBar/CategoryBar"
import Section from "components/UI/Section"
import styles from "./Homepage.module.scss"
import PromotionBanners from "components/PromotionBanners/PromotionBanners"

const categories = [
   {
      id: 1,
      name: "Điện thoại",
      slug: "dtdd",
      brands: [
         { id: 1, name: "Apple", slug: "apple" },
         { id: 2, name: "Samsung", slug: "samsung" },
         { id: 3, name: "Xiaomi", slug: "xiaomi" },
         { id: 4, name: "OPPO", slug: "oppo" },
         { id: 5, name: "Nokia", slug: "nokia" },
         { id: 6, name: "Realme", slug: "realme" },
         { id: 7, name: "Vsmart", slug: "vsmart" },
         { id: 8, name: "ASUS", slug: "asus" },
         { id: 9, name: "Vivo", slug: "vivo" },
      ],
   },
   {
      id: 2,
      name: "Laptop, PC, Màn Hình",
      slug: "laptop-pc-man-hinh",
   },
   {
      id: 3,
      name: "Máy tính bảng",
      slug: "may-tinh-bang",
   },
   {
      id: 4,
      name: "Thiết bị âm thanh",
      slug: "thiet-bi-am-thanh",
   },
   {
      id: 5,
      name: "Đồng hồ",
      slug: "dong-ho",
   },
   {
      id: 6,
      name: "Nhà thông minh",
      slug: "nha-thong-minh",
   },
   {
      id: 7,
      name: "Phụ kiện",
      slug: "phu-kien",
   },
]

const promotions = [
   {
      id: 1,
      name: "Promotion 1",
      image: "https://cdn.cellphones.com.vn/media/ltsoft/promotion/f3-fl3-690-300-max.png",
      description: "Promotion description...",
   },
   {
      id: 2,
      name: "Promotion 1",
      image: "https://cdn.cellphones.com.vn/media/ltsoft/promotion/eries-7-.png",
      description: "Promotion description...",
   },
   {
      id: 3,
      name: "Promotion 1",
      image: "https://cdn.cellphones.com.vn/media/ltsoft/promotion/11t-pro-690x300_9_.png",
      description: "Promotion description...",
   },
   {
      id: 4,
      name: "Promotion 1",
      image: "https://cdn.cellphones.com.vn/media/ltsoft/promotion/asus-gaming-690-300-max.png",
      description: "Promotion description...",
   },
   {
      id: 5,
      name: "Promotion 1",
      image: "https://cdn.cellphones.com.vn/media/ltsoft/promotion/ux-325-690-300-max.png",
      description: "Promotion description...",
   },
   {
      id: 6,
      name: "Promotion 1",
      image: "https://cdn.cellphones.com.vn/media/ltsoft/promotion/sennheiser690x300_13_.png",
      description: "Promotion description...",
   },
   {
      id: 7,
      name: "Promotion 1",
      image: "https://cdn.cellphones.com.vn/media/ltsoft/promotion/philips-690-300-max_1_.png",
      description: "Promotion description...",
   },
]

const banners = [
   {
      id: 1,
      name: "Promotion 1",
      image: "https://cdn.cellphones.com.vn/media/ltsoft/promotion/a52s-r-690-300-max.png",
      description: "Promotion description...",
   },
   {
      id: 2,
      name: "Promotion 1",
      image: "https://cdn.cellphones.com.vn/media/ltsoft/promotion/mn-Right_Banner_Desktop_2_.png",
      description: "Promotion description...",
   },
   {
      id: 3,
      name: "Promotion 1",
      image: "https://cdn.cellphones.com.vn/media/ltsoft/promotion/ltRB.png",
      description: "Promotion description...",
   },
]

const Homepage = () => {
   return (
      <Section className={styles.wrapper}>
         <CategoryBar items={categories} />
         <PromotionCarousel items={promotions} />
         <PromotionBanners items={banners} />
      </Section>
   )
}

export default Homepage
