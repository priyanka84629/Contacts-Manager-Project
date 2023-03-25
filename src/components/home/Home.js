import React from "react";
import Side from "../sidebar/Side";
import TotalContacts from "../TotalContacts/TotalContacts";

import { useState } from "react";
const Home = ()=>{

    const [update,setUpdate]=useState(0)
    
    return <>
    <div className="main">
        <div className="sidebar">
            <Side />
        </div>
        <div className="mainbar">
            <TotalContacts update={update}/>
        </div>
    </div>
    
    </>
}

export default Home