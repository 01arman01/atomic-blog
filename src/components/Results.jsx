import React from 'react';
import { usePost} from "../context/context";
function Results() {
    const {posts} = usePost()
    return <p>🚀 {posts.length} atomic posts found</p>;
}
export default Results;

