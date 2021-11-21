import React from "react"

import { Card } from "react-bootstrap"
import Button from "components/UI/Button"
import Input from "components/UI/Input"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { Link } from "react-router-dom"

import clsx from "clsx"
import styles from "./Register.module.scss"

const Register = () => {
   return (
      <div className={clsx(styles.wrapper)}>
         <Card className={clsx(styles.card)}>
            <p className={styles.title}>Đăng ký</p>

            <form className={styles.form}>
               <div className={styles.formLabelGroup}>
                  <Input id="phone-number" type="text" placeholder="Nhập số điện thoại" />
                  <label htmlFor="phone-number">Số điện thoại</label>
               </div>

               <Button variant="danger" size="sm" className={clsx(styles.btnControl, "mt-4")}>
                  Tiếp theo
               </Button>
            </form>

            <div className={clsx(styles.divider, "mt-4")}>
               <span>Hoặc</span>
            </div>

            <div className={clsx(styles.btnBlock, "mt-4")}>
               <Button size="sm" hover={true} className={clsx(styles.btnOAuth, styles.btnFacebook)}>
                  <FaFacebook />
                  <span>Facebook</span>
               </Button>
               <Button size="sm" hover={true} className={clsx(styles.btnOAuth, styles.btnGoogle)}>
                  <FaGoogle />
                  <span>Google</span>
               </Button>
            </div>

            <div className={clsx(styles.textRegister, "mt-4")}>
               <div className="mt-3">
                  Bạn đã có tài khoản?
                  <Link to="/login"> Đăng nhập</Link>
               </div>
            </div>
         </Card>
      </div>
   )
}

export default Register
