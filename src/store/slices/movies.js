import { createSlice } from "@reduxjs/toolkit"

const INIT_STATE = {
    movies: null,
    movie: null,
    moviesLoading: true,
    moviesError: null,
    movieLoading: true,
    lastDoc: null,
    nextMoviesLoading: false
}

const moviesSlice = createSlice({
    name: "movies",
    initialState: INIT_STATE,
    reducers: {
        moviesAreLoading(state) {
            state.moviesLoading = true;
        },
        moviesSuccess(state, action) {
            state.movies = action.payload.movies;
            state.lastDoc = action.payload.lastDoc;
            state.moviesLoading = false;
        },
        moviesError(state, action) {
            state.movies = action.payload;
            state.moviesLoading = false;
        },
        movieSuccess(state, action) {
            state.movie = action.payload;
            state.movieLoading = false;
        },
        movieIsLoading(state) {
            state.movieLoading = true;
        },
        moviesNextSuccess(state, action) {
            state.lastDoc = action.payload.lastDoc;
            state.movies.push(...action.payload.movies);
            state.moviesLoading = false;
        },
        moviesNextLoading(state) {
            state.nextMoviesLoading = true;
        }
    }
})

export const { moviesSuccess, moviesError, moviesLoading, movieSuccess, movieIsLoading, moviesAreLoading, moviesNextSuccess } = moviesSlice.actions

export default moviesSlice.reducer;