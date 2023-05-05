import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const {postId} = useParams();

    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (postId) => {
        const response = await PostService.getById(postId)
        setPost(response.data)
    }, [postId])

    const [fetchComments, isComLoading, comError] = useFetching(async (postId) => {
        const response = await PostService.getCommentsByPostId(postId)
        setComment(response.data)
    }, [postId])

    useEffect(() => {
        fetchPostById(postId)
        fetchComments(postId)
    }, [])

    return (
        <div>
            {isLoading
                ? <Loader/>
                :<div>
                    <h1>{post.title} #{post.id}</h1>
                    <p>{post.body}</p>
                </div>
            }
            <h1>Комментарии: </h1>
            {isLoading
                ? <Loader/>
                :<div>
                    {comment.map(comm =>
                        <div style={{marginTop:'20px'}}>
                            <h5>{comm.email}</h5>
                            <p>Комментарий: {comm.body}</p>
                        </div>
                    )}

                </div>
            }

        </div>
    );
};

export default PostIdPage;