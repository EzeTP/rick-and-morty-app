import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="fs-3 poppins navbar-brand"  >
                    Rick and Morty <span className="text-success fw-bold">Wiki</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end    " id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5 ">
                        <NavLink to="/" className="nav-link active">
                            Home
                        </NavLink>
                        <NavLink to="/episodes" className="nav-link" >Episodes</NavLink>
                        <NavLink to="/locations" className="nav-link" >Location</NavLink>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
