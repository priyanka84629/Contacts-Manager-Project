// import { Checkbox } from "@material-ui/core";
// import Picker from './picker';
import React,{useState,useEffect}  from "react";
import Table from "./Table";
function Contactpage(){
 const[data,setdata] = useState([])
 const[query,setQuery] = useState("")
//  console.log(query)
console.log(data)
const search = (data)=>{
    console.log(data.filter((item)=> item.email.includes(query.trim())))
    return data.filter((item)=> item.email.includes(query.trim()))
}
 useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then((result)=>{
       result.json().then((resp)=>{
        setdata(resp)
       }) 
})
},[])
   
//   console.log(data)
console.log()
    return(
        <div>
            <div className="logo">
            <span className="text_logo">Logo</span> 
            <div>
                <p className="dashboard">Dashboard</p>
            </div>
            <div className="total_contacts"><p className="text_tc">Total contacts</p></div>
            
            </div>
            <div className="heading">
            <span className="contact_text">Total Contacts</span>
            <input className="search" placeholder="Search by Email Id....." type="text" onChange={(e)=> setQuery(e.target.value)} />
           
            <span className="user_name">name</span>
            <div className="post">Super Admin</div>
            </div>
            <div>
            <span ></span>
            <div>
                <Table data={search(data)}/>
            </div>
            </div>

        </div>
    )
}
export default Contactpage