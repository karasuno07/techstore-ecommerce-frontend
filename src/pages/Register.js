import React from "react"
import { useForm } from "react-hook-form"

import { Card } from "react-bootstrap"
import Button from "components/UI/Button"
import FloatingInput from "components/UI/Form/FloatingInput"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { Link } from "react-router-dom"

import clsx from "clsx"
import styles from "./Register.module.scss"

const Register = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ mode: "all" })

   console.log(errors)

   const onSubmitForm = async (data) => {}

   return (
      <div className={clsx(styles.wrapper)}>
         <Card className={clsx(styles.card)}>
            <p className={styles.title}>Đăng ký</p>

            <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
               <FloatingInput
                  id="phoneNumber"
                  title="Số điện thoại"
                  type="tel"
                  placeholder="Nhập số điện thoại để đăng ký"
                  {...register("phoneNumber", {
                     required: "SĐT không được bỏ trống",
                     pattern: {
                        value: /[0-9]{9,12}/g,
                        message: "Định dạng SĐT không phù hợp",
                     },
                  })}
                  error={errors.phoneNumber}
               />
               <Button variant="danger" size="sm" className={clsx(styles.btnControl, "mt-4")}>
                  Tiếp theo
               </Button>
            </form>

            <div className={clsx(styles.divider, "mt-4")}>
               <span>Hoặc</span>
            </div>

            <div className={clsx(styles.btnBlock, "mt-4")}>
               <Button size="sm" className={clsx(styles.btnOAuth, styles.btnFacebook)}>
                  <FaFacebook />
                  <span>Facebook</span>
               </Button>
               <Button size="sm" className={clsx(styles.btnOAuth, styles.btnGoogle)}>
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
