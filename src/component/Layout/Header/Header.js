import React from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import LocationChooser from "./LocationChooser"
import SearchInput from "./SearchInput"

const Header = () => {
   return (
      <nav className={styles.navbar}>
         <div className={styles.navbar__main}>
            <Link to="/">
               <img src="#" alt="logo" />
            </Link>
            <LocationChooser />
            <SearchInput />
         </div>
      </nav>
   )
}

export default Header
