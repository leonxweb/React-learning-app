import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";

const AppRouter = () => {
    return (
        <Routes >
            <Route
                element={<About/>}
                path="/about"
            />
            <Route
                element={<Posts/>}
                path="/posts"
            />

            <Route
                element={<ErrorPage />}
                path="/404"
            />
            <Route
                element={<Navigate to="/404"/>}
                path="*"
            />
        </Routes>
    );
};

export default AppRouter;