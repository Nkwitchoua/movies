import React, { useEffect } from 'react';
import { Container, Row, Spinner, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMovies, GetMoviesNext } from '../store/actions/moviesActions';

const Movies = () => {

  const navigate = useNavigate();
  const { movies, moviesLoading, lastDoc } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies())
  }, []);

  const nextMoviesHandler = () => {
    dispatch(GetMoviesNext(lastDoc));
  }

  return (
    <Container>
      <Button onClick={() => navigate("/add-movie")} className="mt-5" >Add new movie</Button>
      {
        moviesLoading ? 
        (<Spinner 
          animation='border'
          style={{
            position: "absolute", 
            top: "50%", 
            right: "50%"
          }}
        />) :
        <Row className="mt-3 flex-wrap">
          {
            movies.map(movie => {
              return (
                <Card key={movie.id} style={{ width: '250px', height: "450px", margin: "20px", padding: "10px", positon: "relative" }}>
                  <Card.Img variant="top" src={movie.cover} style={{height: "220px"}} />
                  <Card.Body>
                    <Card.Title>{movie.title} - {movie.release_year}</Card.Title>
                    <Card.Text>
                      {movie.description}
                    </Card.Text>
                    <Button 
                      variant="primary" 
                      style={{
                        position: 
                        "absolute", 
                      bottom:"20px"
                      }}
                      onClick={() => navigate(`/movies/${movie.id}`)}
                    >Details</Button>
                  </Card.Body>
                </Card>
              )
            })
          }
        </Row>
      }
      <Button onClick={nextMoviesHandler}>Load More</Button>
    </Container>
  )
}

export default Movies