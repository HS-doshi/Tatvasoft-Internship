import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createTheme } from '@material-ui/core';
import RegistrationForm from './components/RegistrationForm';
import Login2 from './Login2';
import Register from "./components/Register/Register";
import Footer from "./components/Header/Footer";
import "./components/Header/Footer.css"
// import BookList from "./components/Pages/Booklist";
import Booklistning from "./components/Pages/Booklistning";
import Editproduct from "./components/Pages/Editproduct";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "././components/utils/theme";
import BookList from "./components/book-listing/index";
import EditBook from "./components/edit-book";
import Header from "./components/Header/index";
import UpdateProfile from "./components/update-profile/index";
// import BookList from "./components/constant/book-listing/index";


function App() {
  // const location = useLocation();

  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Header />
        <br />
        {/* {location.pathname !== '/login' && (
          <NavLink to="/login">Click me to go to the Login Page!</NavLink>
        )} */}
        <Routes>
          <Route path="/registrationpage" element={<RegistrationForm />} />
          <Route path='/login' element={<Login2 />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/" element={<BookList />} /> */}
          {/* <Route path="/" element={<Booklistning />} /> */}
          <Route path="/edit-product" element={<Editproduct />} />
          {/* <Route path='/book-list' element={<BookList />} /> */}
          <Route path="/" element={<BookList />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="/update-profile" element={<UpdateProfile />} />

        </Routes>
        {/* <Footer /> */}

      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
