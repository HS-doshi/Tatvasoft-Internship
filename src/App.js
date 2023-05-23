// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from './components/About';
import Employ from './components/Employ';
import logo from "./logo.svg"
import Profile from './components/Profile';

// Component First ketter should be capital!.
function App() {
  const clickme = () => alert("clicked!")

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Edit <code>src/App.js</code> and save to reload. </p>
          <h1>React Training : Tatvasoft!</h1>

          <NavLink to="/">Home</NavLink><br />
          <NavLink to='/emp'>Employee</NavLink><br />
          <NavLink to='/profile'>Profile</NavLink><br />
          <Routes>
            <Route path='/' element={<About name="Heet Doshi" fun={clickme} />} />
            <Route path='/emp' element={<Employ />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
