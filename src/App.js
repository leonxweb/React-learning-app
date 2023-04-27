import {useRef, useState} from "react";
import Counter from "./components/Counter";
import PostItems from "./components/PostItems";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Test JS', body: 'Description'},
        {id: 2, title: 'Test 1JS', body: 'Description'},
        {id: 3, title: 'Test 2JS', body: 'Description'},
        {id: 4, title: 'Test 3JS', body: 'Description'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <div>
                <select>
                    <option value="value1">По названию</option>
                    <option value="value2">По описанию</option>
                </select>
            </div>
            {posts.length
                ? <PostList remove={removePost} posts={posts} title="Список постов"/>
                : <h1 style={{textAlign: 'center'}}>Посты это миф!</h1>
            }

        </div>
    );
}

export default App;
