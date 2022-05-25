import React, { useState} from 'react'
import { Button, Modal, Form } from "react-bootstrap"
import './Add.css'
import { useDispatch, useSelector } from 'react-redux'
import {filmRegister} from "../JS/actions/userAction"
import {Link}from "react-router-dom"
import { editFilmById } from '../JS/actions/userAction'
function EditFilm({film}) {


    const [FilmName, setFilmName] = useState()
    const [photoPath, setphotoPath] = useState('')
    const [rating, setrating] = useState()
    const [descreption, setdescreption] = useState('')
    const [trailer, settrailer] = useState('')
    const [downloadLink, setdownloadLink] = useState("")
    const [show, setshow] = useState(false)
    const dispatch = useDispatch()
    const editFilm = { FilmName, photoPath, rating, descreption, trailer, downloadLink}

  return (
    <div className=''>
      <Button className='AddBtn' onClick={() => setshow(!show)}>Edit movie</Button>
      <Modal show={show} className='Addmodal'>
        <Modal.Header>Edit movie</Modal.Header>
        <Modal.Body >

          <label>movie name</label>

          <Form.Control placeholder={film.FilmName} type="text" onChange={(e) => setFilmName(e.target.value)} />
          <label  >movie Url image</label>
          <Form.Control placeholder={ film.photoPath}  type="text" onChange={(e) => setphotoPath(e.target.value)} />
          <label >movie Reate</label>
          <Form.Control  placeholder={ film.rating} type="text" onChange={(e) => setrating(e.target.value)} />
          <label >movie prod</label>
          <Form.Control placeholder={ film.descreption} type="text" onChange={(e) => setdescreption(e.target.value)} />
          <label >movie trailer</label>
          <Form.Control placeholder={ film.trailer} type="text" onChange={(e) => settrailer(e.target.value)} />
          <label >downloadLink</label>
          <Form.Control placeholder={ film.downloadLink} type="text" onChange={(e) => setdownloadLink(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
        {/* <Link to='/'> */}
          <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={() => dispatch(editFilmById(film._id,editFilm))}
                >Edit</button>
                {/* </Link> */}
          <Button onClick={() => {setshow(!show)}}>close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditFilm
