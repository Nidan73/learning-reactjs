import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postDetails = useLoaderData();
    console.log(postDetails)
    return (
        <div>
            <h2>Title : {postDetails.title}</h2>
            <p>Desc : {postDetails.body}</p>
        </div>
    );
};

export default PostDetails;