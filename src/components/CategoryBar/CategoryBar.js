import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ButtonGroup, Card, Dropdown } from "react-bootstrap"
import { FaChevronRight } from "react-icons/fa"
import { BiCategory } from "react-icons/bi"
import styles from "./CategoryBar.module.scss"

const CategoryBar = ({ items }) => {
   return (
      <Card className={styles.barWrapper}>
         <ul>
            {items.map((item, index) => (
               <li key={index}>
                  {!!item.brands && (
                     <Dropdown as={ButtonGroup} className={styles.dropdown} drop="end">
                        <Link to={item.slug} className={styles.categoryItem}>
                           <BiCategory className={styles.itemIcon} />
                           <div>{item.name}</div>
                        </Link>
                        <Dropdown.Toggle as="div" className={styles.dropdownToggle} split>
                           <FaChevronRight className={styles.navIcon} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={styles.dropdownMenu} renderOnMount={true}>
                           {item.brands.map((brand) => (
                              <Dropdown.Item
                                 key={brand.id}
                                 as={Link}
                                 to={brand.slug}
                                 className={styles.dropdownItem}>
                                 {brand.name}
                              </Dropdown.Item>
                           ))}
                        </Dropdown.Menu>
                     </Dropdown>
                  )}
                  {!!item.brands === false && (
                     <Link to={item.slug} className={styles.categoryItem}>
                        <BiCategory className={styles.itemIcon} />
                        <div>{item.name}</div>
                     </Link>
                  )}
               </li>
            ))}
            <li>
               <div className={styles.categoryItem}>
                  <BiCategory className={styles.itemIcon} />
                  <Link to="sforum">Tin công nghệ</Link>
               </div>
            </li>
            <li>
               <div className={styles.categoryItem}>
                  <BiCategory className={styles.itemIcon} />
                  <Link to="promotion">Khuyến mại</Link>
               </div>
            </li>
         </ul>
      </Card>
   )
}

export default CategoryBar
