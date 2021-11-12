import React from "react"
import styles from "./SearchInput.module.css"
import Input from "../../UI/Input"

const SearchInput = (props) => {
   console.log(styles)
   return <Input className={styles.searchBox}></Input>
}

export default SearchInput
