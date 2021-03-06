import React, { useState, useEffect } from "react"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { useMatch } from "react-router"

import Breadcrumbs from "components/UI/Breadcrumbs"
import Container from "components/UI/Container"
import BrandFilterBar from "components/Filter/BrandFilterBar"
import SortFilter from "components/Filter/SortFilter"
import CriteriaFilter from "components/Filter/CriteriaFilter"
import FilterList from "components/Filter/FilterList"
import ProductList from "components/ProductList/ProductList"

import Filters from "common/constants/CriteriaFilter"
import { filterAction } from "app/ecommerce-pages/productFilterReducer"

import styles from "./Products.module.scss"

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

const brands = [
   {
      id: 1,
      name: "Apple",
      slug: "apple",
      image: "https://cellphones.com.vn/media/icons/brands/brand-286.svg",
   },
   {
      id: 2,
      name: "Samsung",
      slug: "samsung",
      image: "https://cellphones.com.vn/media/icons/brands/brand-211.svg",
   },
   {
      id: 3,
      name: "Xiaomi",
      slug: "xiaomi",
      image: "https://cellphones.com.vn/media/icons/brands/brand-274.svg",
   },
   {
      id: 4,
      name: "Oppo",
      slug: "oppo",
      image: "https://cellphones.com.vn/media/icons/brands/brand-769.svg",
   },
   {
      id: 5,
      name: "Nokia",
      slug: "nokia",
      image: "https://cellphones.com.vn/media/icons/brands/brand-1214.svg",
   },
   {
      id: 6,
      name: "Realme",
      slug: "realme",
      image: "https://cellphones.com.vn/media/icons/brands/brand-721.svg",
   },
   {
      id: 7,
      name: "Vsmart",
      slug: "vsmart",
      image: "https://cellphones.com.vn/media/icons/brands/brand-vsmart.svg",
   },
   {
      id: 8,
      name: "Asus",
      slug: "asus",
      image: "https://cellphones.com.vn/media/icons/brands/brand-1052.svg",
   },
   {
      id: 9,
      name: "Vivo",
      slug: "vivo",
      image: "https://cellphones.com.vn/media/icons/brands/brand-vivo.svg",
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

const Products = () => {
   const categoryMatch = useMatch(":category")
   const [category, setCategory] = useState({})
   const brandMatch = useMatch(":category/:brand")
   const [brand, setBrand] = useState({})
   const dispatch = useDispatch()
   const { filters, isFiltering } = useSelector((state) => state.productFilter.filter, shallowEqual)
   const sort = useSelector((state) => state.productFilter.sort, shallowEqual)

   const categorySlugOnly = categoryMatch && categoryMatch.params.category
   const categorySlug = brandMatch && brandMatch.params.category
   const brandSlug = brandMatch && brandMatch.params.brand
   const activeFilters = filters && filters.filter((filter) => filter.active)

   const toggleCriteriaFilter = (filterIndex, criteriaIndex) => {
      dispatch(filterAction.toggleCriteriaFilter({ filterIndex, criteriaIndex }))
   }

   const removeCriteriaFilter = (filterIndex) => {
      dispatch(filterAction.removeCriteriaFilter(filterIndex))
   }

   const toggleSortFilter = (event) => {
      const filterType = event.target.closest("[data-filter]").dataset.filter
      dispatch(
         filterType === "name"
            ? filterAction.toggleAlphabetSort()
            : filterAction.toggleFilterSort(filterType)
      )
   }

   useEffect(() => {
      // Gọi API
      if (categorySlugOnly) {
         const existingCategory = categories.find((category) => category.slug === categorySlugOnly)
         setCategory(existingCategory)
         dispatch(filterAction.loadFilter(Filters[categorySlugOnly]))
      } else {
         const existingCategory = categories.find((category) => category.slug === categorySlug)
         setCategory(existingCategory)
         dispatch(filterAction.loadFilter(Filters[categorySlugOnly]))

         setBrand({ name: "Apple", slug: "apple" })
      }
   }, [dispatch, categorySlugOnly, categorySlug, brandSlug])

   if (
      category === undefined ||
      (Object.keys(category).length === 0 && category.constructor === Object)
   ) {
      return <div></div>
   } else {
      return (
         <React.Fragment>
            <Breadcrumbs
               links={[
                  { page: category.name, href: category.slug },
                  { page: brand.name, href: brand.slug },
               ]}
            />
            <Container size="XL" className={styles.container}>
               {categorySlugOnly && <BrandFilterBar items={brands} />}
               {activeFilters && activeFilters.length > 0 && (
                  <FilterList filters={activeFilters} handleRemoveFilter={removeCriteriaFilter} />
               )}
               {filters && (
                  <CriteriaFilter
                     filters={filters}
                     isFiltering={isFiltering}
                     handleActiveFilter={toggleCriteriaFilter}
                  />
               )}
               <SortFilter sort={sort} handleActiveFilter={toggleSortFilter} />
               <ProductList list={smartphoneList} />
            </Container>
         </React.Fragment>
      )
   }
}

export default Products
