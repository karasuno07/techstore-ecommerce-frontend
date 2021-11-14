import React from "react"
import { Link } from "react-router-dom"
import CartBag from "./CartBag"
import styles from "./Header.module.scss"
import LocationChooser from "./LocationChooser"
import OrderInfo from "./OrderInfo"
import PhoneContact from "./PhoneContact"
import SearchInput from "./SearchInput"
import UserMenu from "./UserMenu"

const Header = (props) => {
   return (
      <nav className={styles.navbar}>
         <div className={styles.navbarMain}>
            <Link to="/">
               <img src="/logo.png" alt="logo" height="60" />
            </Link>
            <LocationChooser />
            <SearchInput onToggleOverlays={props.onToggleOverlays} />
            <PhoneContact />
            <OrderInfo />
            <CartBag />
            <UserMenu />
         </div>
      </nav>
   )
}

export default Header
