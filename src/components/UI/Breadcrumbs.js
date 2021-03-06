import React from "react"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"

import styles from "./Breadcrumbs.module.scss"

const Breadcrumbs = ({ links }) => {
   return (
      <div className={styles.wrapper}>
         <ul className={styles.box}>
            <li className={styles.breadcrumb}>
               <FaHome className={styles.homeIcon} />
               <Link to="/">Trang Chủ</Link>
            </li>
            {links
               .map((item, index, initialItems) => {
                  const prevItems = initialItems.slice(0, index)

                  const link =
                     prevItems.length > 0
                        ? prevItems.reduce((output, prevItem) => output + "/" + prevItem.href, "") +
                          "/" +
                          item.href
                        : "/" + item.href

                  return (
                     <li key={index} className={styles.breadcrumb}>
                        <Link to={link}>{item.page}</Link>
                     </li>
                  )
               })
               .reduce((output, item) => {
                  return [...output, item]
               }, [])}
         </ul>
      </div>
   )
}

export default Breadcrumbs
