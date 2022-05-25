import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../JS/actions/userAction'

const NavBar = () => {

    const isAuth = useSelector(state => state.userReducer.isAuth)

    const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/login"}>
                        Authentification Passport
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            {!isAuth ? (<>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/login"}>
                                        Sign in
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/register"}>
                                        Sign up
                                    </Link>
                                </li>
                            </>) : (<li className="nav-item">
                                <Link className="nav-link" to={"/login"} onClick={() => dispatch(logout())}>
                                    LOG_OUT
                                </Link>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar