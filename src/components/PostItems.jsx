import React from 'react';
import '../style/style.css';

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
                <button style={{padding:"10px 30px"}}>Тестовая кнопка</button>
            </div>
        </div>
    );
};

export default PostItems;