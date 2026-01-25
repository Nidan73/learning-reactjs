import React, { useState } from 'react';

const ControlledField = () => {
    const [password,setPassword] = useState('');
    const [error , setError] = useState('')
    const handleSubmit = (e) => {
            e.preventDefault();
            console.log("submitted")
    }

    const HandleChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)

        password.length <= 6 ? setError('less than 6 characters') : setError('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
               <input type="email" placeholder='type your email'
                name="email" id="" required />

               <br/>

               <input placeholder='type your pass' 
               onChange={HandleChange} defaultValue={password} 
               type="password" name="password" id="" required />
               <br/>

               <input type="submit" value="submit" />  
            </form>
            <p><small style={{color : 'red'}}>{error}</small></p>
        </div>
    );
};

export default ControlledField;

