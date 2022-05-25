import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userLogin } from '../JS/actions/userAction'
import Loader from './Loader'


const UserLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errmsg, seterrmsg] = useState("")

    const dispatch = useDispatch()

    const loading = useSelector(state => state.userReducer.loading)
    const isAuth = useSelector(state => state.userReducer.isAuth)
  


    const login = (e) => {
        try {
            
            const cred = { email, password }
            e.preventDefault();
    
            dispatch(userLogin(cred))
    
            setEmail("")
            setPassword("")
            seterrmsg("Bad credentiel")
        }
         catch (error){
            
         }
    }
    return loading ? <Loader /> : isAuth ? <Navigate to='/profile' /> : (<div className="auth-wrapper">
        <div className="auth-inner">
            <form>
                <h3>Sign In</h3>
                <h4>{errmsg}</h4>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={login}
                >
                    Sign in
                </button>
                <p className="forgot-password text-right">Forgot password?</p>
            </form>
        </div>
    </div>
    )
}

export default UserLogin