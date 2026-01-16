export default function Friend ({data}){
    const {name , email} = data;
    return (
        <div className="card">
            <h4>Name : {name}</h4>
            <h4>Email : {email}</h4>
        </div>
    )
}