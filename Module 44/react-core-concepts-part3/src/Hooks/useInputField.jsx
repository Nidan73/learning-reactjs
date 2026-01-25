import { useState } from "react"

const useInputField = (defaultValue) =>{

    const [inputField,setInputField] = useState(defaultValue)
    
    const handleFieldOnChange = (e) => {
        setInputField(e.target.value)
    }
    return [inputField , handleFieldOnChange];
}

export default useInputField;