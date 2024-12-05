import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const currLocation = useLocation();

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        window.location.reload();
    }
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                        <li className="nav-item">
                            <Link className={`nav-link ${currLocation.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
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