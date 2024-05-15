import {useEffect, useState} from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import {PostProvider} from "./context/context";


function App() {
    // const [posts, setPosts] = useState(() =>
    //   Array.from({ length: 30 }, () => createRandomPost())
    // );
    // const [searchQuery, setSearchQuery] = useState("");
    const [isFakeDark, setIsFakeDark] = useState(false);
    //
    //   // const PostContext = createContext({})
    //
    //
    // // Derived state. These are the posts that will actually be displayed
    // const searchedPosts =
    //   searchQuery.length > 0
    //     ? posts.filter((post) =>
    //         `${post.title} ${post.body}`
    //           .toLowerCase()
    //           .includes(searchQuery.toLowerCase())
    //       )
    //     : posts;
    //
    // function handleAddPost(post) {
    //   setPosts((posts) => [post, ...posts]);
    // }
    //
    // function handleClearPosts() {
    //   setPosts([]);
    // }

    // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
    useEffect(
        function () {
            document.documentElement.classList.toggle("fake-dark-mode");
        },
        [isFakeDark]
    );

    return (

        <section>
            <button
                onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
                className="btn-fake-dark-mode"
            >
                {isFakeDark ? "☀️" : "🌙"}
            </button>
            <PostProvider>
                <Header/>
                <Main/>
                <Archive/>
                <Footer/>
            </PostProvider>
        </section>

    );
}


export default App;
