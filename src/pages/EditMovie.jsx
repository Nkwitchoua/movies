import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { AddMovieAction, UpdateMovie } from "../store/actions/moviesActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditMovie = () => {

  const { movieId } = useParams();
  const { movie, movieLoading } = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    release_year: "",
    cover: "",
    genres: "",
  });

  useEffect(() => {
    if(movie) {
        setForm(movie);
    }
  }, [])

  const inputHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className="mt-5 mb-5 d-flex justify-content-center">
      <Form>
        <h4>Add new movie</h4>
        <Form.Group className="mb-2">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={form.title}
            name="title"
            onChange={inputHandler}
            type="text"
            placeholder="Avatar 2"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Description</Form.Label>
          <Form.Control
          value={form.description}
            name="description"
            onChange={inputHandler}
            as="textarea"
            rows={3}
            placeholder="Some description"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Release year</Form.Label>
          <Form.Control
          value={form.release_year}
            name="release_year"
            onChange={inputHandler}
            type="date"
            placeholder="12.03.2021"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Cover</Form.Label>
          <Form.Control
          value={form.cover}
            name="cover"
            onChange={inputHandler}
            type="text"
            placeholder="Paste image URL"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Genres</Form.Label>
          <Form.Control
          value={form.genres}
            name="genres"
            onChange={inputHandler}
            type="text"
            placeholder="Action, Thriller, Sci-Fi"
          />
        </Form.Group>
        <Button
          onClick={() => {
            dispatch(UpdateMovie(movieId, form));
            navigate(`/movies/${movieId}`);
          }}
          className="mt-3"
        >
          Update movie
        </Button>
      </Form>
    </Container>
  );
};

export default EditMovie;