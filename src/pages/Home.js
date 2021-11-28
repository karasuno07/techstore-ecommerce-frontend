import React from "react"
import PromotionCarousel from "components/Carousel/PromotionCarousel/PromotionCarousel"
import CategoryBar from "components/CategoryBar/CategoryBar"
import Section from "components/UI/Section"
import styles from "./Home.module.scss"
import PromotionBanners from "components/PromotionBanners/PromotionBanners"
import ProductList from "components/ProductList/ProductList"

const categories = [
   {
      id: 1,
      name: "Điện thoại",
      slug: "mobile",
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

const smartphoneList = [
   {
      id: 1,
      name: "Samsung Galaxy Note 10",
      slug: "samsung-galaxy-note-10",
      brand: {
         id: 2,
         name: "Samsung",
         slug: "samsung",
         image: "https://cellphones.com.vn/media/icons/brands/brand-211.svg",
      },
      category: {
         id: 1,
         name: "Mobile",
         slug: "mobile",
         parent: null,
      },
      details: [
         {
            id: 1,
            inStock: 30,
            price: 24590000,
            discount: 2990000,
            description: {},
            isDefault: true,
            images: [
               "https://cdn.cellphones.com.vn/media/catalog/product/cache/8/image/1000x/040ec09b1e35df139433887a97daa66f/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611.jpg",
            ],
         },
      ],
      rating: {
         number: 5,
         count: 87,
      },
   },
   {
      id: 2,
      name: "Iphone 13 Pro Max",
      slug: "iphone-13-pro-max",
      brand: {
         id: 1,
         name: "Apple",
         slug: "apple",
         image: "https://cellphones.com.vn/media/icons/brands/brand-286.svg",
      },
      category: {
         id: 1,
         name: "Mobile",
         slug: "mobile",
         parent: null,
      },
      details: [
         {
            id: 1,
            inStock: 25,
            price: 34900000,
            discount: 1000000,
            description: {},
            isDefault: true,
            images: [
               "https://cdn.cellphones.com.vn/media/catalog/product/cache/8/image/1000x/040ec09b1e35df139433887a97daa66f/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611.jpg",
            ],
         },
      ],
      rating: {
         number: 3.3,
         count: 12,
      },
   },
   {
      id: 3,
      name: "Iphone 13 Pro Max",
      slug: "iphone-13-pro-max",
      brand: {
         id: 1,
         name: "Apple",
         slug: "apple",
         image: "https://cellphones.com.vn/media/icons/brands/brand-286.svg",
      },
      category: {
         id: 1,
         name: "Mobile",
         slug: "mobile",
         parent: null,
      },
      details: [
         {
            id: 1,
            inStock: 25,
            price: 34900000,
            discount: 1000000,
            description: {},
            isDefault: true,
            images: [
               "https://cdn.cellphones.com.vn/media/catalog/product/cache/8/image/1000x/040ec09b1e35df139433887a97daa66f/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611.jpg",
            ],
         },
      ],
      rating: {
         number: 5,
         count: 1,
      },
   },
   {
      id: 4,
      name: "Iphone 13 Pro Max",
      slug: "iphone-13-pro-max",
      brand: {
         id: 1,
         name: "Apple",
         slug: "apple",
         image: "https://cellphones.com.vn/media/icons/brands/brand-286.svg",
      },
      category: {
         id: 1,
         name: "Mobile",
         slug: "mobile",
         parent: null,
      },
      details: [
         {
            id: 1,
            inStock: 25,
            price: 34900000,
            discount: 1000000,
            description: {},
            isDefault: true,
            images: [
               "https://cdn.cellphones.com.vn/media/catalog/product/cache/8/image/1000x/040ec09b1e35df139433887a97daa66f/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611.jpg",
            ],
         },
      ],
      rating: {
         number: 3.3,
         count: 79,
      },
   },
   {
      id: 5,
      name: "Iphone 13 Pro Max",
      slug: "iphone-13-pro-max",
      brand: {
         id: 1,
         name: "Apple",
         slug: "apple",
         image: "https://cellphones.com.vn/media/icons/brands/brand-286.svg",
      },
      category: {
         id: 1,
         name: "Mobile",
         slug: "mobile",
         parent: null,
      },
      details: [
         {
            id: 1,
            inStock: 25,
            price: 34900000,
            discount: 1000000,
            description: {},
            isDefault: true,
            images: [
               "https://cdn.cellphones.com.vn/media/catalog/product/cache/8/image/1000x/040ec09b1e35df139433887a97daa66f/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611.jpg",
            ],
         },
      ],
      rating: {
         number: 5,
         count: 87,
      },
   },
]

const Homepage = () => {
   return (
      <div className={styles.wrapper}>
         <Section className={styles.bannerWrapper}>
            <CategoryBar items={categories} />
            <PromotionCarousel items={promotions} />
            <PromotionBanners items={banners} />
         </Section>
         <Section>
            <ProductList
               title={categories[0]}
               filter={categories[0].brands}
               list={smartphoneList}
            />
         </Section>
      </div>
   )
}

export default Homepage
