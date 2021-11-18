import React, { useState, useEffect } from "react"
import styles from "./SearchInput.module.scss"
import Input from "../../UI/Input"
import { BsSearch } from "react-icons/bs"

const SearchInput = ({ onToggleOverlays }) => {
   const [isSearching, setIsSearching] = useState(false)
   const [searchValue, setSearchValue] = useState("")

   const handleTypingSearchBox = (event) => {
      const text = event.target.value
      setSearchValue(text)

      if (text.length > 0) {
         setIsSearching(true)
         onToggleOverlays(true)
      } else {
         setIsSearching(false)
         onToggleOverlays(false)
      }
   }

   useEffect(() => {
      const timerId = setTimeout(() => {
         // Gọi API
         console.log(searchValue)
      }, 2000)

      return () => clearTimeout(timerId)
   }, [searchValue])

   return (
      <div className={styles.inputGroup}>
         <div className={styles.searchIcon_Block}>
            <BsSearch className={styles.searchIcon_Icon} />
         </div>
         <Input
            className={styles.searchBox}
            placeholder="Bạn cần tìm gì?"
            onKeyUp={handleTypingSearchBox}
         />
         {isSearching && <div className={styles.searchBox_Expand}></div>}
      </div>
   )
}

export default SearchInput
