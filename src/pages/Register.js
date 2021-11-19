import React from "react"
import clsx from "clsx"
import {Card} from "react-bootstrap"
import styles from "./Register.module.scss"

import FormRegister from "components/FormAccount/FormRegister"
import BtnAuth2 from "components/FormAccount/BtnAuth2"
import { Link } from "react-router-dom"

const Register = () => {
   return <div className={clsx(styles.wrapper,"pt-5")}>
       <Card className={clsx(styles.card)}>
            <p className={styles.title}>Đăng ký</p>
            <FormRegister />
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
                Bằng việc đăng kí, bạn đã đồng ý với Shopee về <br />
                <a href="" target="_blank">Điều khoản dịch vụ</a> &amp; 
                <a href="">Chính sách bảo mật</a>
                <div className="mt-3">
                    Bạn đã có tài khoản? 
                    <Link to="/login">Đăng nhập</Link>
                </div>
            </div>
       </Card>
   </div>
}

export default Register