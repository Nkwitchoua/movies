import { moviesError, moviesSuccess, movieSuccess, movieIsLoading, moviesAreLoading, moviesNextSuccess } from "../slices/movies";
import { getDocs, collection, addDoc, getDoc, doc, query, limit, orderBy, startAt, startAfter, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { toast } from "react-toastify";

export const getMovies = () => async (dispatch) => {
    dispatch(moviesAreLoading)
    try {
        const movieList = [];
        // const movies = await getDocs(collection(db, "movies"));
        const movies = await getDocs(query(collection(db, "movies"), limit(4), orderBy("title")));
        await movies.docs
            .forEach(movie => {
                movieList.push({
                    ...movie.data(),
                    id: movie.id
                })
            });
        const lastDoc = movies.docs[movies.docs.length - 1];
        dispatch(moviesSuccess({movies: movieList, lastDoc }));
    } catch(err) {
        dispatch(moviesError(err))
    }
    // await axios.get(API)
    // .then(data => dispatch(moviesSuccess(data.data)))
}

export const GetMoviesNext = (lastDoc) => async (dispatch) => {
    try {
        dispatch(moviesAreLoading());
        const movieList = [];
        const movies = await getDocs(query(
                            collection(db, "movies"), 
                            limit(4), 
                            orderBy("title"), 
                            startAfter(lastDoc)
                            ))
        movies.docs
        .forEach(movie => {
            movieList.push({
                ...movie.data(),
                id: movie.id
            })
        });
        const lastDocNext = movies.docs[movies.docs.length - 1];
        dispatch(moviesNextSuccess({
            movies: movieList,
            lastDoc: lastDocNext
        }))
    } catch(err) {
        dispatch(moviesError(err.message))
    }
}

export const AddMovieAction = (movie) => async (dispatch) => {
    await addDoc(collection(db, "movies"), movie);
    toast.success("You added new movie!")
}

export const getMovie = (movieId) => async (dispatch) => {
    dispatch(movieIsLoading());
    const movie = await getDoc(doc(db, "movies", `${movieId}`))
    dispatch(movieSuccess({
        id: movie.id,
        ...movie.data()
    }))
}

export const UpdateMovie = (movieId, movieData) => async (dispatch) => {
    await updateDoc(doc(db, "movies", `${movieId}`), movieData)
    .then(() => {
        dispatch(getMovie(movieId));
    });
}