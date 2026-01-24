import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {title} = post;
       const userStyle = {

        border : '2px solid yellow',
        borderRadius : '20px',
        padding : '10px',
        margin : '10px'
    }
    return (
        <div style={userStyle}>
            <h3>Title : {title}</h3>
            <Link to={`/Posts/${post.id}`}>Deaills Link</Link>
        </div>
    );
};

export default Post;