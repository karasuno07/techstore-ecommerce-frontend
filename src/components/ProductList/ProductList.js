import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProductFilter from "./ProductFilter"
import ProductItem from "./ProductItem"

import styles from "./ProductList.module.scss"

const ProductList = ({ title, filter, list }) => {
   return (
      <Container fluid className={styles.container}>
         {title && filter && <ProductFilter title={title} filter={filter} />}

         <Row className={styles.row} sm={2} md={4} lg={5}>
            {list.map((product, index) => (
               <Col key={index} className={styles.col}>
                  <ProductItem item={product} />
               </Col>
            ))}
         </Row>
      </Container>
   )
}

export default ProductList
