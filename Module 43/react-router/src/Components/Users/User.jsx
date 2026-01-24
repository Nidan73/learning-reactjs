import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name , email , phone} = user;
    const [toggle , setToggle] = useState(false);

    // const userPromise = fetch(`http://localhost:5173/users/${user.id}`)
    const userStyle = {

        border : '2px solid yellow',
        borderRadius : '20px',
        padding : '10px',
        margin : '10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email : {email}</p>
            <p><small>Phone : {phone}</small></p>
            <Link to={`/users/${user.id}`}>Show details</Link>
            <button onClick={()=>setToggle(!toggle)}>
                {
                    toggle ? "Hide " : "Show "
                }
            Info</button>
            {
                toggle &&  <Suspense>
                    <div>
                     <p>Company name : {user.company.name}</p>
                     <p>Adress : {user.address.street}</p>
                    </div>
                </Suspense>
            }
        </div>
    );
};

export default User;