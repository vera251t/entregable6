import { useForm } from "react-hook-form"
import useAuth from "../hooks/userAuth"
import './styles/Login.css'
import { useState } from "react"
import LogOut from "./LogOut"
const LoginPage = () => {

    const { register, reset, handleSubmit } = useForm()
    const { loginUser } = useAuth()
    const [loggedIn, setLoggedIn] = useState(false)
    const submit = data => {
        const url =  'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        loginUser(url, data)
        reset({
            email: '',
            password: ''
        })
        setLoggedIn(true)
    }
    const handleLogout = () => {
        setLoggedIn(false);
    }
  return (
    <>
        {!loggedIn ? (
            <div className="login">
                <div className="login__container">
                    <h2 className="login__title">Welcome! Enter your email and password to continue</h2>
                    <form className="login__form" onSubmit={handleSubmit(submit)}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input {...register('email')} type="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input {...register('password')} type="password" id="password" />
                        </div>
                        <button className="login__btn">Login</button>
                    </form>
                </div>
            </div>
        )   :   (
            <LogOut onLogout={handleLogout} />
        )}
    </>
  )
}

export default LoginPage