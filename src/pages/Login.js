import React from "react"
import clsx from "clsx"
import {Card} from "react-bootstrap"
import styles from "./Login.module.scss"

import Input from "components/UI/Input"
import Button from "components/UI/Button"

const Login = () => {
   return <div className={clsx(styles.wrapper,"pt-5")}>
       <Card className={clsx(styles.card)}>
            <div className="header">
                <h2>Đăng ký</h2>
            </div>
            <div className="body">
                <form action="" id="formLogin">
                    <Input 
                    type="text" 
                    placeholder="Số điện thoại" 
                    className={clsx(styles.inputControl,"mt-3")}
                    />
                    <Button 
                    variant="danger" 
                    size="sm" 
                    className={clsx(styles.btnControl, "mt-3")} 
                    > Tiếp theo </Button>
                </form>

                <div className={clsx(styles.orLogin, "mt-3")}>
                    <div></div>
                    <span>Hoặc</span>
                    <div></div>
                </div>

            </div>
            <div className="footer">

            </div>
       </Card>
   </div>
}

export default Login