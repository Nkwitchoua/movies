import React, { useEffect } from 'react'
import { Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getMovie } from '../store/actions/moviesActions';

const Details = () => {

    const navigate = useNavigate();
    const params = useParams();
    
    const dispatch = useDispatch();
    const { movie, movieLoading } = useSelector((state) => state.movies)

    useEffect(() => {
        dispatch(getMovie(params.movieId));        
    }, [params]);

    if(movieLoading) {
        return <Spinner 
            animation='border' 
            style={{
                position: "absolute", 
                top: "50%", 
                right: "50%"
            }}
        />
    }

    return (
        <div style={{
            height:"850px",
            maxWidth: "100%",
            backgroundImage: `url(${movie.cover})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: "-2"
        }}>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)"
            }}>
                <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                    <h2 style={{color: "white", fontSize: "108px", textAlign: "center"}}>{movie.title}</h2>
                    <Button onClick={() => navigate(`/edit-movie/${params.movieId}`)} >Edit movie</Button>
                </div>
            </div>
        </div>
    )
}

export default Details