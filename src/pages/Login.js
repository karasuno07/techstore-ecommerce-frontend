import React from "react"

import { Card } from "react-bootstrap"
import Input from "components/UI/Input"
import Button from "components/UI/Button"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { Link } from "react-router-dom"

import clsx from "clsx"
import styles from "./Login.module.scss"

const Login = () => {
   return (
      <div className={clsx(styles.wrapper, "pt-5")}>
         <Card className={clsx(styles.card)}>
            <h3 className={styles.title}>Đăng nhập</h3>

            <form className={styles.form}>
               <div className={styles.formLabelGroup}>
                  <Input id="username" type="text" placeholder="Nhập tên đăng nhập" />
                  <label htmlFor="username">Tên đăng nhập</label>
               </div>

               <div className={styles.formLabelGroup}>
                  <Input id="password" type="password" placeholder="Nhập mật khẩu" />
                  <label htmlFor="password">Mật khẩu</label>
               </div>

               <Button variant="danger" size="sm" className={clsx(styles.btnSignIn)}>
                  Đăng nhập
               </Button>
               <div className={clsx(styles.forgotPassword)}>
                  <Link to="/">Quên mật khẩu</Link>
               </div>
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

            <div className={clsx(styles.textRegister, "mt-5")}>
               Chưa phải là thành viên?
               <Link to="/register"> Đăng ký ngay</Link>
            </div>
         </Card>
      </div>
   )
}

export default Login
