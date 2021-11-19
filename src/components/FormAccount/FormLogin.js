import React from 'react'
import clsx from "clsx"
import styles from "./FormLogin.module.scss"
import Input from "components/UI/Input"
import Button from "components/UI/Button"

const FormLogin = () => {
    return (
        <form action="" id="form">
                    <Input 
                    type="text" 
                    placeholder="Số điện thoại/Email/Tên đăng nhập" 
                    className={clsx(styles.inputControl,"mt-3")}
                    />

                    <Input 
                    type="password" 
                    placeholder="Mật khẩu" 
                    className={clsx(styles.inputControl,"mt-4")}
                    />

                    <Button 
                    variant="danger" 
                    size="sm" 
                    className={clsx(styles.btnControl)} 
                    > Đăng nhập </Button>
                    <div className={clsx(styles.forgotPassword)} ><a href="">Quên mật khẩu</a></div>
        </form>
    )
}

export default FormLogin
