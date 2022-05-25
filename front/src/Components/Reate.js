import React,{useState , useEffect} from 'react'
import {FaStar} from "react-icons/fa"
function Reate(props) {
const[rating, setRating]=useState(null)
const[hover, setHover]=useState(null)

React.useEffect(() => {props.add(rating)})


  return (

    

    <div className='d-flex'>

        {
            [...Array(5)].map((Start, i)=>{ 
                const ratingValue =i +1
                return(
                    <label key={i} >
                        <input type="radio"  name='rating' value={ratingValue}
                        onClick={()=>setRating(ratingValue)}
                        />
                    <FaStar size={20} color={ ratingValue <= (hover || rating) ? "hsl(54, 100%, 50%)" : "hsla(0, 0%, 96%, 0.863) "}
                    onMouseEnter={()=>setHover(ratingValue)}
                    onMouseLeave={()=>setHover(null)}
                    />
                    </label>
                );
            }
            )}

    </div>
  )
}

export default Reate
