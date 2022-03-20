import React, {useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const NavBar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = () => {
        auth.logout()
        history.push("/")
    }

    return (
        <div className="">
            <header className="p-3 text-white bg-primary">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <strong className="fs-5">Link shortner</strong>
                </NavLink>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={{ marginLeft: '150px' }}>
                    <li>
                        <NavLink
                            to="/create"
                            className="nav-link px-2 text-white">
                            Create Link
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/links"
                            className="nav-link px-2 text-white">
                            Links
                        </NavLink>
                    </li>
                </ul>

                <div className="col-md-3 text-end">
                    <button className="btn text-white"><span className="">Username</span></button>
                    <button type="button" className="btn btn-outline-light me-2" onClick={logoutHandler}>Logout</button>
                </div>
            </div>
            </div>
        </header>
        </div>
    );

};