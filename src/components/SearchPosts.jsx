import React from 'react';
import { usePost} from "../context/context";

function SearchPosts() {
    const {searchQuery,setSearchQuery} =usePost()
    return (
        <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
        />
    );
}
export default SearchPosts;