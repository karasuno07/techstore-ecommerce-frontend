import React from "react"
import { useDispatch } from "react-redux"

import { Container, Row, Col } from "react-bootstrap"
import ProductFilter from "./ProductFilter"
import ProductItem from "./ProductItem"

import { cartAction } from "app/ecommerce-pages/cartReducer"

import styles from "./ProductList.module.scss"

const ProductList = ({ title, filter, list }) => {
   const dispatch = useDispatch()

   const handleAddItemToCart = (product, detail, quantity) => {
      dispatch(cartAction.addItem({ product, detail, quantity }))
   }

   return (
      <Container fluid className={styles.container}>
         {title && filter && <ProductFilter title={title} filter={filter} />}
         <Row className={styles.row} sm={2} md={4} lg={5}>
            {list.map((product, index) => (
               <Col key={index} className={styles.col}>
                  <ProductItem item={product} onAddItem={handleAddItemToCart} />
               </Col>
            ))}
         </Row>
      </Container>
   )
}

export default ProductList
