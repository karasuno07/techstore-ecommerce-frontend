import React from "react"
import clsx from "clsx"
import {Card} from "react-bootstrap"
import styles from "./Login.module.scss"

import FormLogin from "components/FormAccount/FormLogin"
import BtnAuth2 from "components/FormAccount/BtnAuth2"
import { Link } from "react-router-dom"

const Login = () => {
   return <div className={clsx(styles.wrapper,"pt-5")}>
       <Card className={clsx(styles.card)}>
            <p className={styles.title}>Đăng nhập</p>
            <FormLogin />
            <div className={clsx(styles.orLogin, "mt-4")}>
                <div></div>
                <span>Hoặc</span>
                <div></div>
            </div>
            <div className={clsx( styles.btnAuth,"mt-4")}>
                <BtnAuth2 iconName="facebook" text="Facebook" />
                <BtnAuth2 iconName="google" text="Google" />
            </div>

            <div className={clsx( styles.textRegister,"mt-5")}>
                    Bạn mới biết đến Tech Store? 
                    <Link to="/register"> Đăng ký</Link>
            </div>
       </Card>
   </div>
}

export default Login