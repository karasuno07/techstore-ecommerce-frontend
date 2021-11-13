import React from "react"
import styles from "./SearchInput.module.css"
import Input from "../../UI/Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchInput = (props) => {
   return (
      <div className={styles.inputGroup}>
         <div className={styles.searchIcon_Block}>
            <FontAwesomeIcon icon={["fas", "search"]} className={styles.searchIcon_Icon} />
         </div>
         <Input className={styles.searchBox} placeholder="Bạn cần tìm gì?"></Input>
      </div>
   )
}

export default SearchInput
