import {useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import PostItems from "./components/PostItems";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Test JS', body: 'Description'},
        {id: 2, title: 'Test 1JS', body: 'Description'},
        {id: 3, title: 'Test 2JS', body: 'Description'},
        {id: 4, title: 'Test 3JS', body: 'Description'}
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')


    const sortedPosts = useMemo(() => {
        if (selectedSort){
            return [...posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    },[selectedSort,posts])

    const sortedAndSearchedPosts = useMemo( () => {
        return sortedPosts.filter(post => post.title.includes(searchQuery))
    },[searchQuery, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) =>{
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        {value:'title', name: 'По названию'},
                        {value:'body', name: 'По описанию'}
                    ]}
                />
            </div>
            {sortedAndSearchedPosts.length
                ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>
                : <h1 style={{textAlign: 'center'}}>Посты это миф!</h1>
            }

        </div>
    );
}

export default App;
