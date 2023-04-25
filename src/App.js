import {useState} from "react";
import Counter from "./components/Counter";
import PostItems from "./components/PostItems";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPost] = useState([
        {id: 1, title: 'Test JS', body: 'Description'},
        {id: 2, title: 'Test 1JS', body: 'Description'},
        {id: 3, title: 'Test 2JS', body: 'Description'},
        {id: 4, title: 'Test 3JS', body: 'Description'}
    ])

    const [title, setTitle] = useState()
    const addNewPost = (e) => {
        e.preventDefault()

    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput type="text" placeholder="Описание поста"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}

export default App;
