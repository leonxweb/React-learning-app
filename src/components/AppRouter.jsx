import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";
import PostIdPage from "../pages/PostIdPage";


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<About/>} path="about"/>
            <Route element={<Posts/>} path="posts"/>
            <Route element={<PostIdPage/>} path="posts/:postId"/>
            <Route element={<ErrorPage />} path="404"/>
            <Route element={<Navigate to="/404"/>} path="*"/>
        </Routes>
    );
};

export default AppRouter;