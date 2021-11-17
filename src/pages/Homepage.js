import CategoryBar from "components/CategoryBar/CategoryBar"
import React from "react"
import styles from "./Homepage.module.scss"

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

const Homepage = () => {
   return (
      <div className={styles.wrapper}>
         <CategoryBar items={categories} />
      </div>
   )
}

export default Homepage
