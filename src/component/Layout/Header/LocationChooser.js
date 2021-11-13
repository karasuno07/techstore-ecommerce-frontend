import React from "react"
import styles from "./LocationChooser.module.css"
import { Dropdown } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LocationChooser = () => {
   return (
      <Dropdown className={styles.localStore_Box}>
         <Dropdown.Toggle
            variant="none"
            id="dropdown-local-store"
            className={styles.dropdownButton}>
            <FontAwesomeIcon icon={["fas", "map-marker-alt"]} className={styles.boxIcon} />
            <div className={styles.boxContent}>
               <p>Xem giá tại</p>
               <p>
                  <span>Hồ Chí Minh</span>
                  <FontAwesomeIcon icon={["fas", "chevron-down"]} className="ms-1" />
               </p>
            </div>
         </Dropdown.Toggle>
         <Dropdown.Menu as="ul" className={styles.dropdownMenu}>
            <Dropdown.Item as="li" className={styles.active}>
               Action
            </Dropdown.Item>
            <Dropdown.Item as="li">Another action</Dropdown.Item>
            <Dropdown.Item as="li">Something else</Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   )
}

export default LocationChooser
