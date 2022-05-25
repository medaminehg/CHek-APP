import React, { useState} from 'react'
import { Button, Modal, Form } from "react-bootstrap"
import './Add.css'
import { useDispatch, useSelector } from 'react-redux'
import {filmRegister} from "../JS/actions/userAction"
import {Link}from "react-router-dom"

function Addfilm() {
  const [FilmName, setFilmName] = useState('')
  const [photoPath, setphotoPath] = useState('')
  const [rating, setrating] = useState()
  const [descreption, setdescreption] = useState('')
  const [trailer, settrailer] = useState('')
  const [downloadLink, setdownloadLink] = useState("")
  const [show, setshow] = useState(false)
  const dispatch = useDispatch()
  
    
    const newFilm = { FilmName, photoPath, rating, descreption, trailer, downloadLink}



        
 

  return (
    <div className=''>
      <Button className='AddBtn' onClick={() => setshow(!show)}>Add movie</Button>
      <Modal show={show} className='Addmodal'>
        <Modal.Header>Add movie</Modal.Header>
        <Modal.Body >

          <label>movie name</label>

          <Form.Control type="text" onChange={(e) => setFilmName(e.target.value)} />
          <label>movie Url image</label>
          <Form.Control type="text" onChange={(e) => setphotoPath(e.target.value)} />
          <label>movie Reate</label>
          <Form.Control type="text" onChange={(e) => setrating(e.target.value)} />
          <label>movie prod</label>
          <Form.Control type="text" onChange={(e) => setdescreption(e.target.value)} />
          <label>movie ann</label>
          <Form.Control type="text" onChange={(e) => settrailer(e.target.value)} />
          <label>downloadLink</label>
          <Form.Control type="text" onChange={(e) => setdownloadLink(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
        <Link to='/'>
          <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => dispatch(filmRegister(newFilm))}
                >Add</button></Link>
          <Button onClick={() => {setshow(!show)}}>close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addfilm
