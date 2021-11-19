import React from 'react'
import clsx from "clsx"
import styles from "./FormRegister.module.scss"
import Input from "components/UI/Input"
import Button from "components/UI/Button"

const FormRegister = () => {
    return (
        <form action="" id="form">
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
    )
}

export default FormRegister
