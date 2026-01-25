import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {

    const [name,setName] = useInputField('');
    const [email ,setEmail] = useInputField('');
    const [password ,setPassword] = useInputField('');

    const hanleSubmit = (e) => {
       e.preventDefault();
       
    }
    return (
        <div>
            <form onSubmit={hanleSubmit}>
               <input onChange={setName} defaultValue={name} type="text" placeholder='Name' name="name"/>
               <br/>
               <input onChange={setEmail} defaultValue={email} type="email" name="email" placeholder='Email' />
               <br/>
               <input onChange={setPassword} defaultValue={password} type="password" name="password" placeholder='type your password' />
               <br/>
               <input type="submit" value="submit" />
         </form>
        </div>
    );
};

export default HookForm;