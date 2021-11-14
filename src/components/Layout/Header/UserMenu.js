import React from "react"
import styles from "./UserMenu.module.scss"
import { FaUserCircle } from "react-icons/fa"

const UserMenu = () => {
   return (
      <div className={styles.userBox}>
         <FaUserCircle className={styles.userBoxIcon} />
         <p className={styles.userBoxText}>Member</p>
      </div>
   )
}

export default UserMenu
