import React from "react"
import { Link } from "react-router-dom"
import { Card, Dropdown } from "react-bootstrap"
import { FaChevronRight } from "react-icons/fa"
import { BiCategory } from "react-icons/bi"
import styles from "./CategoryBar.module.scss"
import DropdownLink from "components/UI/DropdownLink"

const CategoryBar = ({ items }) => {
   return (
      <Card className={styles.barWrapper}>
         <ul>
            {items.map((item, index) => (
               <li key={index}>
                  {!!item.brands && (
                     <Dropdown drop="end">
                        <Dropdown.Toggle variant="none" className={styles.categoryItem}>
                           <BiCategory className={styles.itemIcon} />
                           <div>{item.name}</div>
                           <FaChevronRight className={styles.navIcon} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={styles.menuWrapper}>
                           {item.brands.map((brand) => (
                              <Dropdown.Item key={brand.id} as={DropdownLink} href={brand.slug}>
                                 {brand.name}
                              </Dropdown.Item>
                           ))}
                        </Dropdown.Menu>
                     </Dropdown>
                  )}
                  {!!item.brands === false && (
                     <div className={styles.categoryItem}>
                        <BiCategory className={styles.itemIcon} />
                        <div>{item.name}</div>
                     </div>
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
                  <Link to="sforum">Khuyến mại</Link>
               </div>
            </li>
         </ul>
      </Card>
   )
}

export default CategoryBar
