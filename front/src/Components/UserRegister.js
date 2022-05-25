import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userRegister } from '../JS/actions/userAction'
import Loader from "./Loader"



const UserRegister = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [errmsg, seterrmsg] = useState("")
    const dispatch = useDispatch()

    const loading = useSelector(state => state.userReducer.loading)


   
        const newFilm = { fullName, email, password, phone }
      

      
       
        
    




    return loading ? <Loader /> : (<div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>
                <h3>{errmsg}</h3>
                <div className="form-group">
                    <label>Full name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="FullName"
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => dispatch(userRegister(newFilm))}
                >
                    Sign Up
                </button>
                <p className="forgot-password text-right">
                    Already registered <Link to={`/login`}>sign in? </Link>
                </p>
            </form>
        </div>
    </div>
    )
}

export default UserRegister