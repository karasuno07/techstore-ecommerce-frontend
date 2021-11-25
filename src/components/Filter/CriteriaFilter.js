import React from "react"

import Button from "components/UI/Button"
import { Dropdown, Row, Col } from "react-bootstrap"
import { FaFilter, FaChevronDown } from "react-icons/fa"

import clsx from "clsx"
import styles from "./GeneralFilter.module.scss"

const CriteriaFilter = ({ filters, isFiltering, handleActiveFilter }) => {
   return (
      <div className={styles.wrapper}>
         <p className={styles.title}>Chọn theo tiêu chí</p>
         <div className={styles.filters}>
            <Dropdown>
               <Dropdown.Toggle
                  variant="none"
                  bsPrefix={clsx(styles.filter, { [styles.active]: isFiltering })}>
                  <FaFilter className="icon-md" />
                  <span>Bộ lọc</span>
               </Dropdown.Toggle>

               <Dropdown.Menu className="border-0 p-0">
                  <Row className={styles.filterMenu} sm={2} md={3}>
                     {filters.map((filter, filterIndex) => (
                        <Col
                           key={filterIndex}
                           className={clsx(styles.filterMenuItem, {
                              [styles.active]: filter.active,
                           })}>
                           <p className={clsx(styles.title, styles.sm)}>{filter.filterName}</p>
                           <Row sm={"auto"} className={styles.itemBox}>
                              {filter.criteria.map((criteria, criteriaIndex) => (
                                 <Col
                                    key={criteriaIndex}
                                    as={Button}
                                    className={clsx(styles.filter, {
                                       [styles.active]: criteria.active,
                                    })}
                                    onClick={handleActiveFilter.bind(
                                       null,
                                       filterIndex,
                                       criteriaIndex
                                    )}>
                                    {criteria.value}
                                 </Col>
                              ))}
                           </Row>
                        </Col>
                     ))}
                  </Row>
               </Dropdown.Menu>
            </Dropdown>
            {filters.map((filter, filterIndex) => (
               <Dropdown key={filterIndex}>
                  <Dropdown.Toggle
                     variant="none"
                     bsPrefix={clsx(styles.filter, { [styles.active]: filter.active })}>
                     <span>{filter.filterName}</span>
                     <FaChevronDown className="icon-sm" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="border-0 p-0">
                     <Row className={clsx(styles.filterMenu, styles.singleFilter)} sm={"auto"}>
                        {filter.criteria.map((criteria, criteriaIndex) => (
                           <Col
                              key={criteriaIndex}
                              as={Button}
                              className={clsx(styles.filter, { [styles.active]: criteria.active })}
                              onClick={handleActiveFilter.bind(null, filterIndex, criteriaIndex)}>
                              {criteria.value}
                           </Col>
                        ))}
                     </Row>
                  </Dropdown.Menu>
               </Dropdown>
            ))}
         </div>
      </div>
   )
}

export default CriteriaFilter
