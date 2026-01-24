import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {website,username} = user
    return (
        <div>
            <p>Name : {username}</p>
            <p>website of user : {website}</p>
        </div>
    );
};

export default UserDetails;