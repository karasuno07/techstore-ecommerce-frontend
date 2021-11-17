import React from "react"
import clsx from "clsx"
import {Card} from "react-bootstrap"
import stylesHome from "./Homepage.module.scss"
import styles from "./Login.module.scss"

import Input from "components/UI/Input"
import Button from "components/UI/Button"

const Homepage = () => {
   return <div className={clsx(stylesHome.wrapper,"pt-5")}>
       <Card className={clsx(styles.card)}>
            <div className="header">
                <h2>Đăng ký</h2>
            </div>
            <div className="body">
                <form action="" id="formLogin">
                    <Input type="text" placeholder="Số điện thoại" className={clsx(styles.inputControl,"mt-3")}/>
                    <Button />
                </form>
                <div>

                </div>
                <div className="orLogin">

                </div>
            </div>
            <div className="footer">

            </div>
       </Card>
   </div>
}

export default Homepage