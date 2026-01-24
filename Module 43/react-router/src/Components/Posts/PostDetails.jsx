import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const navigate = useNavigate();
    const prams = useParams();
    console.log(prams);

    return (
        <div>
            <h2>Title : {postDetails.title}</h2>
            <p>Desc : {postDetails.body}</p>
            <button onClick={()=> navigate(-1)}>go back</button>
        </div>
    );
};

export default PostDetails;