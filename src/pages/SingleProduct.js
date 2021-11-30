import React, { useState, useEffect } from "react"
import Container from "components/UI/Container"
import styles from "./SingleProduct.module.scss"
import Breadcrumbs from "components/UI/Breadcrumbs"
import { useMatch } from "react-router"
import ProductTitle from "components/SingleProduct/ProductTitle"
import Product from "components/SingleProduct/Product"

const defaultProduct = {
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
            "https://cdn.cellphones.com.vn/media/catalog/product/cache/8/image/1000x/040ec09b1e35df139433887a97daa66f/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611.jpg",
         ],
      },
      {
         id: 2,
         inStock: 40,
         price: 28590000,
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
}

const SingleProduct = () => {
   const {
      params: { categorySlug, brandSlug, productSlug },
   } = useMatch(":category/:brand/:product")
   const [product, setProduct] = useState({})

   useEffect(() => {
      // Gọi API validate product / brand / category
      setProduct(defaultProduct)
   }, [categorySlug, brandSlug, productSlug])

   return (
      <React.Fragment>
         {Object.keys(product).length > 0 && (
            <React.Fragment>
               <Breadcrumbs
                  links={[
                     { page: product.category.name, href: product.category.slug },
                     { page: product.brand.name, href: product.brand.slug },
                     { page: product.name, href: product.slug },
                  ]}
               />
               <ProductTitle name={product.name} rating={product.rating} />
            </React.Fragment>
         )}
         <Container size="XL" className={styles.container}>
            {Object.keys(product).length > 0 && <Product product={product} />}
         </Container>
      </React.Fragment>
   )
}

export default SingleProduct
