import React, { useRef } from 'react';

const UncontrolledForm = () => {
    const emailRef = useRef('')
    const passRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(email,pass)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" /><br/>
                <input ref={passRef} type="password" name="password" /><br/>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolledForm;