export default function ToDo ({tech , isDone}){
    if(isDone === true){
       return <p>My work : {tech}</p> }
    return <p>Job hasnt done yet</p>
}