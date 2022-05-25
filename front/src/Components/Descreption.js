import React ,{useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'
import {useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import Addfilm from './Addfilm';
import ScrollTop from "./ScrollTop"
import { deleteFilm } from '../JS/actions/userAction';
import {Link}from "react-router-dom"
import EditFilm from './EditFilm';


function Descreption({movies}) {

  const dispatch = useDispatch()
  
  const params = useParams()
  const film = movies.find(el => el.FilmName === params.FilmName)
  const user = useSelector(state => state.userReducer.user)
  
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const down =()=>{
    return (
        alert("you need to login first")
    )
  }
  return (

    <div className='moviedescreption'>
    <ScrollTop/>
     
    
      <h2 className='moviename'>{film && film.FilmName}</h2>
      <div className='d-flex d-flexx'>

      <img src={film && film.photoPath} className="movieimg"/>
<div>
   <p className='moviedescreption'>{film && film.descreption}</p>
   </div>
      </div>
      <br></br>
      <br></br>
      {!isAuth ? 

   <button className="button is-medium"onClick={down}>download</button>
     :
     <a href={film && film.downloadLink} target="_blank"> <button className="button is-medium">download</button></a>
    }
    <br/><br></br>
    <br/><br></br>
    {
      user && user.admin?
      
      <Link to='/'>  <button className=""onClick={() => dispatch(deleteFilm(film._id))}>Delete</button></Link> 

      
      : null
    }
       {
      user && user.admin?
      <EditFilm film={film}/>
      
      : null
    }
    {/* { user.admin ? <Addfilm/>: null } */}

   <ReactPlayer className="trailer" url={film && film.trailer} controls= "True"/>
   

</div>
  )
}

export default Descreption
