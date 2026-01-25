import React from 'react';

const ActionForm = () => {

    const handleFormAction = (formData) => {
        const name = formData.get("name");
        console.log(name);
        console.log(formData.get("email"));
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input placeholder='Type your name' name='name' type="text" />
               <br/>
               <input type="email" placeholder="email" name="email" id="" />
               <br/>
               <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ActionForm;