import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Movies from "./pages/Movies";
import { Provider } from "react-redux";
import { store } from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from "./pages/AddMovie";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import Details from "./pages/Details";
import EditMovie from "./pages/EditMovie";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/add-movie" element={<AddMovie/>} />
          <Route path="/movies/:movieId" element={<Details/>} />
          <Route path="/edit-movie/:movieId" element={<EditMovie/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </Provider>
  );
}

export default App;
