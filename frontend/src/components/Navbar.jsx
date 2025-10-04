import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import modeContext from '../context/mode/modeContext';

const Navbar = () => {
    const currLocation = useLocation();
    const {mode, toggleMode} = useContext(modeContext)
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (

        <nav className={`navbar navbar-expand-lg text-${mode == "light" ? "black" : "light"} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${currLocation.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>

                    <div className="form-check form-switch pt-3" style={{margin:"10px"}}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>

                    {!localStorage.getItem('token') ? <form className="d-flex" onSubmit={(e) => { e.preventDefault(); /* handle search */ }}>
                        <Link className="btn btn-primary mx-1" role='button' to="/login">Login</Link>
                        <Link className="btn btn-primary mx-1" role='button' to="/signup">SignUp</Link>
                    </form> :
                        <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;