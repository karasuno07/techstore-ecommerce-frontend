import React, { useState } from "react"
import styles from "./LocationChooser.module.scss"
import { Dropdown } from "react-bootstrap"
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa"

const availableLocalStores = ["Hồ Chí Minh", "Hà Nội", "Đà Nẵng"]

const LocationChooser = () => {
   const [currentStore, setCurrentStore] = useState(availableLocalStores[0])

   const handleChooseStoreClick = (index) => {
      if (index < 0 || index > availableLocalStores.length - 1) index = 0
      setCurrentStore(availableLocalStores[index])
   }

   return (
      <Dropdown className={styles.box}>
         <Dropdown.Toggle
            variant="none"
            id="dropdown-local-store"
            className={styles.dropdownButton}>
            <FaMapMarkerAlt className={styles.boxIcon} />
            <div className={styles.boxContent}>
               <p>Xem giá tại</p>
               <p>
                  <span>{currentStore}</span>
                  <FaChevronDown className="ms-1" />
               </p>
            </div>
         </Dropdown.Toggle>
         <Dropdown.Menu as="ul" className={styles.dropdownMenu}>
            {availableLocalStores.map((store, index) => (
               <Dropdown.Item
                  key={index}
                  as="li"
                  className={store === currentStore ? styles.active : ""}
                  onClick={handleChooseStoreClick.bind(null, index)}>
                  {store}
               </Dropdown.Item>
            ))}
         </Dropdown.Menu>
      </Dropdown>
   )
}

export default LocationChooser
