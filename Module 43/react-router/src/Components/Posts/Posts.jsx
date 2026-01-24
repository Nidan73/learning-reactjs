import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    const Posts = useLoaderData();
    return (
        <div>
            <p>Total post : {Posts.length}</p>
            {
                Posts.map(post =><Post key={post.id} post = {post}></Post>)
            }
        </div>
    );
};

export default Posts;