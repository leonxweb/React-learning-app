import React from 'react';
import '../style/style.css';
import MyButton from "./UI/button/MyButton";
import {Link} from 'react-router-dom';


const PostItems = (props) => {


    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>

            <div className="post__btns">
                <Link key={props.post.id} to={`/posts/${props.post.id}`}>Открыть</Link>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItems;