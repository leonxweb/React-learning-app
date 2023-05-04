import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Ошибка 404</h1>
            <Link style={{textAlign: "center"}} to="/posts">
                Вернуться на главную страницу
            </Link>
        </div>
    );
};

export default ErrorPage;