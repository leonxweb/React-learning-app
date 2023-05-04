import React from 'react';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Posts from "../../../pages/Posts";
import About from "../../../pages/About";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__list">
                <Link to="/posts">Перейти к постам</Link>
                <Link to="/about">Раздел о нас</Link>
            </div>
        </div>
    );
};

export default Navbar;