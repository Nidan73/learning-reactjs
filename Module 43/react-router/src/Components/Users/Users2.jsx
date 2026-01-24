import React, { use } from 'react';

const Users2 = ({userPromise}) => {
    const usersData = use(userPromise);
    return (
        <div>
            <h1>This is users two</h1>
        </div>
    );
};

export default Users2;