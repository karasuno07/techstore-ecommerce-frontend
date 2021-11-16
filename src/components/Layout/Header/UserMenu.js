import React from "react"
import { Link } from "react-router-dom"
import styles from "./UserMenu.module.scss"
import { FaUserCircle } from "react-icons/fa"

const UserMenu = () => {
   return (
      <Link to="/login" className={styles.userBox}>
         <FaUserCircle className={styles.userBoxIcon} />
         <p className={styles.userBoxText}>Member</p>
      </Link>
   )
}

export default UserMenu
