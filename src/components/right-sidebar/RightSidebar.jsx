import AttualeMissione from "./AttualeMissione";
import Followers from "./Followers";
import Axios from "axios";
import { useState, useEffect } from "react";
import { getUsers } from "../../network/Gateway";

export default function RightSidebar() {

    const [followers, setFollowers] = useState([]); /*10 utenti*/

    useEffect(() => {
        getUsers().then((response) =>{
        setFollowers(response.data);
        console.log(response.data);
        } )
    }, []);

    // useEffect(() => {
    //     Axios.get("https://jsonplaceholder.typicode.com/users").then((response) =>{
    //     setFollowers(response.data);
    //     console.log(response.data);
    //     } )
    // }, []);

    return (
    <nav className="sticky top-0 h-screen flex flex-col gap-4 w-64">
      <div className="rounded-2xl overflow-hidden p-2 bg-smp-white dark:bg-smp-light-gray flex flex-col gap-4 shadow-lg shadow-smp-shadow h-screen" 
      // bg-[url('src/assets/sfndoAz.png')] dark:bg-[url('src/assets/sfondoScuro.png')]
      >
        <AttualeMissione/>
        <h1 className="text-xl font-bold mt-3 ml-2">Followers</h1>
        {followers.slice(0,9).map((follower, index) => (
        <div key={index}>
            <Followers follower = {follower}/>
        </div>
        ))}
      </div>
    </nav>
  );
}