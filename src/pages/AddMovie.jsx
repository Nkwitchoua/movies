import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { AddMovieAction } from '../store/actions/moviesActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddMovie = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
      title: "",
      release_year: "",
      description: "",
      genres: [],
      cover: ""
  })

  const inputHandler = (event) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    })
  }

  console.log(form)

  return (
      <Container className='my-5 d-flex justify-content-center'>
        <Form >
            <h4 className='text-align-center'>Add new movie</h4>
            <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    onChange={(event) => inputHandler(event)}
                    name="title" 
                    type='text' 
                    placeholder='Avatar 2'/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Release Year</Form.Label>
                <Form.Control 
                    onChange={(event) => inputHandler(event)}
                    name="release_year" 
                    type='date'/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Genres</Form.Label>
                <Form.Control 
                    onChange={(event) => inputHandler(event)}
                    name="genres" 
                    type='text' 
                    placeholder='Action, Thriller'/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    onChange={(event) => inputHandler(event)}
                    name="description" 
                    as="textarea" 
                    rows={3} 
                    placeholder='Lorem Ipsum'/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Cover</Form.Label>
                <Form.Control 
                    onChange={(event) => inputHandler(event)}
                    name='cover' 
                    type='text' 
                    placeholder='Lorem Ipsum'/>
            </Form.Group>
            <Button 
                className='mt-3' 
                onClick={() => {
                    dispatch(AddMovieAction(form));
                    navigate("/movies");
                    }}>Upload</Button>
        </Form>
      </Container>
  )
}

export default AddMovie