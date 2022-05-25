import React from 'react'
import MovisRate from './MovisRate'
import './Newmovie.css'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function NewMovie(props) {
  const isAuth = useSelector(state => state.userReducer.isAuth)
  let navigate = useNavigate();

const down =()=>{
  return (
      alert("you need to login first")
  )
}

  
  return (
    
      <div className="top">
  <div className="columns">
    <div className="column is-full featured_wrapper p-0">
      <img src={props.movies && props.movies.photoPath} className="featured img" />
      <div className="title_wrapper">
        <span className="has-text-white title">Trending Today</span>
        <h1 className="title is-1 has-text-white">{props.movies &&props.movies.FilmName}</h1>
        <h3 className="title is-3 has-text-white"><MovisRate Mrate={props.movies &&props.movies.rating} /></h3>
      <div className='d-flex'>
       <a href={props.movies && props.movies.trailer} target="_blank"> <button className="button is-medium">Trailer</button></a>
     
{ !isAuth ? 
  <button className="button is-medium" onClick={down}>download</button>
  :

   <a href={props.movies && props.movies.trailer} target="_blank"> <button className="button is-medium">download</button></a>

}
</div>


   


      </div>
    </div>
  </div>
</div>
    
  )
}

export default NewMovie