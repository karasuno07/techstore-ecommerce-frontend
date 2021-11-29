import React from "react"
import { useForm } from "react-hook-form"

import { Card } from "react-bootstrap"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { Link } from "react-router-dom"
import Button from "components/UI/Button"
import FloatingInput from "components/UI/Form/FloatingInput"

import clsx from "clsx"
import styles from "./Login.module.scss"

const Login = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ mode: "all" })

   const onSubmitForm = async (data) => {
      console.log(data)
   }

   return (
      <div className={clsx(styles.wrapper)}>
         <Card className={clsx(styles.card)}>
            <h3 className={styles.title}>Đăng nhập</h3>

            <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
               <FloatingInput
                  id="username"
                  title="Tên đăng nhập"
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  {...register("username", {
                     required: "Tên đăng nhập không được bỏ trống",
                     minLength: {
                        value: 6,
                        message: "Tên đăng nhập phải dài tối thiểu 6 ký tự",
                     },
                  })}
                  error={errors.username}
               />
               <FloatingInput
                  id="password"
                  title="Mật khẩu"
                  type="password"
                  placeholder="Nhập mật khẩu"
                  {...register("password", {
                     required: "Mật khẩu không được bỏ trống",
                     minLength: {
                        value: 6,
                        message: "Mật khẩu phải dài tối thiểu 6 ký tự",
                     },
                  })}
                  error={errors.password}
               />
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
               <Button size="sm" className={clsx(styles.btnOAuth, styles.btnFacebook)}>
                  <FaFacebook />
                  <span>Facebook</span>
               </Button>
               <Button size="sm" className={clsx(styles.btnOAuth, styles.btnGoogle)}>
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
