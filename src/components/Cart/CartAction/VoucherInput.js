import Button from "components/UI/Button"
import Input from "components/UI/Form/Input"
import React from "react"
import { Card } from "react-bootstrap"
import styles from "./VoucherInput.module.scss"

const VoucherInput = () => {
   return (
      <Card className={styles.wrapper}>
         <Card.Header className={styles.header}>
            <span className="fw-bold">Mã khuyến mãi</span>
         </Card.Header>
         <Card.Body className={styles.body}>
            <div className={styles.inputBlock}>
               <Input type="text" placeholder="Nhập mã khuyến mãi" />
               <Button className={styles.btnApply}>Apply</Button>
            </div>
         </Card.Body>
      </Card>
   )
}

export default VoucherInput
