import React from "react"
import styles from "./PhoneContact.module.scss"
import { BsTelephone } from "react-icons/bs"

const PhoneContact = () => {
   return (
      <div className={styles.phoneContactBox}>
         <BsTelephone className={styles.phoneContactIcon} />
         <p className={styles.phoneContactText}>
            Gọi mua hàng
            <br />
            <span className="fw-bold">0812.638.042</span>
         </p>
      </div>
   )
}

export default PhoneContact
