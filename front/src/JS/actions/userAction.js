import { FILM_GET ,GET_PROFILE, GET_PROFILE_FAILED, GET_PROFILE_SUCCESS, LOGOUT, USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_FAILED, USER_REGISTER_SUCCESS } from "../constants/actionsTypes"
import axios from "axios"
import { async } from "rxjs"


// User Register creator
export const userRegister = (newUser) => async (dispatch) => {

    dispatch({ type: USER_REGISTER })

    try {

        const res = await axios.post('http://localhost:5000/user/register', newUser)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data })

    } catch (error) {

        dispatch({ type: USER_REGISTER_FAILED, payload: error.response.data })
        console.log(error)

    }

}

//User login action creator
export const userLogin = (userCred) => async (dispatch) => {
    dispatch({ type: USER_LOGIN })
    try {
        const res = await axios.post("http://localhost:5000/user/login", userCred)
        localStorage.setItem("token", res.data.token)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED })
        console.log(error)
    }
}

//Check user is authentificateted
export const getProfile = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE })

    const config = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    try {
        const res = await axios.get("http://localhost:5000/user/currentuser", config)
        dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data })

    } catch (error) {
        dispatch({ type: GET_PROFILE_FAILED, payload: error.response.data })
    }
}
 
//Logout

export const logout = ()=>(dispatch)=>{
    dispatch({type : LOGOUT})
    try {
        localStorage.removeItem('token')
    } catch (error) {
        console.log(error)
    }
}
export const filmRegister = (newFilm) => (dispatch) => {
    axios.post('http://localhost:5000/film/addfilm', newFilm)
        .then(() => dispatch(getfilm()))
        .catch(err => console.log(err))
}
export const getfilm = () => (dispatch) => {
    axios.get("http://localhost:5000/film/getfilm")
        .then(res => dispatch({type : FILM_GET,  payload: res.data }))
        .catch(err => console.log(err))
}
export const deleteFilm = (id) => (dispatch) => {
    axios.delete(`http://localhost:5000/film/delete/${id}`)
        .then(() => dispatch(getfilm()))
        .catch(err => console.log(err))
}
export const editFilmById = (id, editFilm) => (dispatch) => {
    axios.put(`http://localhost:5000/film/update/${id}`, editFilm)
        .then(() => dispatch(getfilm()))
        .catch(err => console.log(err))
}