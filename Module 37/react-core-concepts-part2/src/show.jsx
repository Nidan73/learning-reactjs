import { useState } from "react"

export default function Show()
{
    const [show,toggle] = useState(true)

    
    return(
        <div className="card">           
            {
                show && <p>Hello word</p>
            }
              <button onClick={()=>toggle(!show)}>Swtich</button>
        </div>
    )
}