import { use } from "react"
import Friend from "./friend";
export default function Friends({friendsPromise}){
    const data = use(friendsPromise);
    return(
    <div className="card">
         {
            data.map(data => <Friend key={data.id} data = {data}></Friend>)
         }
    </div>)
}