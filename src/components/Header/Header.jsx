import React from 'react';
import { Link } from 'react-router-dom';
import Tatvasoft from '../../Images/Tatvasoft-logo-profile.jpg'
import './Header.css'
import Search from './Search';

const Header = () => {
    return (
        <div className="Main-content">
            <hr className='header-top' />
            <div className='Header'>
                <div className='logo' title='Tatvasoft'> <Link to='/' style={{ textDecoration: 'none' }}>
                    <img src={Tatvasoft} alt='Tatvasoft' /></Link> </div>
                <div className="nav-wrapper">
                    <div className="top-right-bar">
                        <ul className="top-nav-bar">
                            <li className='colo'><Link to="/login" style={{ color: 'red', textDecoration: 'none' }}>Login</Link></li>
                            <li><span>|</span></li>
                            <li className='colo'><Link to="/register" style={{ color: 'red', textDecoration: 'none' }}>Register</Link></li>
                        </ul>

                        <ul className="cart-country-wrap">
                            <li className="cart-link">
                                <Link to="/cart" style={{ color: 'red' }}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAYAAACTQC2+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFFRjAyMTM0NjkyQTExRUM5MkI5OTdBQTM5M0U1MjM1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFFRjAyMTM1NjkyQTExRUM5MkI5OTdBQTM5M0U1MjM1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUVGMDIxMzI2OTJBMTFFQzkyQjk5N0FBMzkzRTUyMzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUVGMDIxMzM2OTJBMTFFQzkyQjk5N0FBMzkzRTUyMzUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz62D0kSAAABlElEQVR42qzWTSgEYRjA8Z1N4aAoB3HhIBeHLbetTXKhOFDi6qDs0Ymbi9qDLVw2RyEpDqRVDqKEi68cnOTrspSvLSWS9X/qUe9O+zEzO0/9at6dd+aZZ+Z9n9ZKhzsygexIoxHvAR+jDGvGuA4RRBHzM5FFRea4Evf4RRM+/azIDLnxHKYwjATkSYZKzPNsr0iiGg94QTNqcaPVeo3JYI4fZRHM64KQSh6xXEISeUuJYJ6TM/jCuHxHzCLjMdGSvLp8iVJYQCt6cIUtD0lkUU3LQbDApDh+MGFU6Tbk4a6LJZIJ6wijHfs4cZkonm8f2SOEM+ygG33mxUVCXnev00QS2+hCG8792rC5IqbVyEZOurh31gJykugAh9oDIy4SrbhNJDGAej2uwkeOfSULq9zoj6/2k04ipWSJ72FDW9Op6sSunhvFBW4Lde9CsYpBY/yGBl2ZR7a5UW1jriv6X+pm1Gg/DDmY6/gbSRyjxRg/aVev0O9l2eYGvFY0hk184xL92nhlb43gTv8GyHZYtF/8J8AAiLVcf1VYDpIAAAAASUVORK5CYII="
                                    alt="cart" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className='search'>
          <div className='header-search'>
            <div className='header-search-area'>
              <input className='placeholder' type="text" placeholder='Search...'/>
              <button type='submit' className='btn1'><img src={search}/>Search</button>
              <button type='submit' className='btn2'>Cancel</button>
            </div>
          </div>
        </div> */}
            <Search />
        </div >
    );
}

export default Header;
