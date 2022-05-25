import React from 'react'
import { Button, Card } from 'react-bootstrap';
import MovisRate from './MovisRate';
import './MovisCard.css'
import {Link}from "react-router-dom"
import { useSelector } from "react-redux";

function MovisCard(props) {
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const down =()=>{
    return (
        alert("you need to login first")
    )
  }
  return (
   
     
    <div className="hero-container">
  <div className="main-container">
    <div className="poster-container">
     <img src={props.film.photoPath} className="poster img" />
    </div>
    <div className="ticket-container">
      <div className="ticket__content">
        <h4 className="ticket__movie-title">{props.film.FilmName}</h4>
        <p className="ticket__movie-slogan">
          {props.film.prod}
        </p>
        <p className="ticket__current-price"><MovisRate Mrate={props.film.rating}/></p>

        {!isAuth?
       <button className="ticket__buy-btn" onClick={down}>watch it now</button>

       : <Link to={`/users/profile/${props.film.FilmName}`}>
       <button className="ticket__buy-btn">watch it now</button>
       </Link>
        }
      </div>
   
  </div>
</div>
</div>

  )
}

export default MovisCard
