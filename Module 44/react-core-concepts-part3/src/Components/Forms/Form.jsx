import React from 'react';

const Form = () => {

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log(e.target.name.value)
       console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Type your name' name='name' type="text" />
                <br></br>
                <input placeholder='Type your Email' name='email' type="text" />
                 <br></br>
                <button name='submit' type="Submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;