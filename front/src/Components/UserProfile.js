import React from 'react'
import { useSelector } from 'react-redux'
import Addfilm from './Addfilm'

const UserProfile = () => {

  const user = useSelector(state => state.userReducer.user)


  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div className="d-flex flex-column align-items-center text-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt="Admin"
            className="rounded-circle"
            width="150"
          />
          <div className="mt-3">
          <p className="text-secondary mb-1">welcome {user && user.fullName}</p>
           
            <p className="text-secondary mb-1">{user && user.email}</p>
            
            <p className="text-muted font-size-sm">{user && user.phone}</p>
            {user && user.admin ?
                        <p className="text-muted font-size-sm">Admin</p>:null

            }
          </div>
        </div>
      </div>
     {user && user.admin ? <Addfilm/>: null }
    </div>
  )
}

export default UserProfile