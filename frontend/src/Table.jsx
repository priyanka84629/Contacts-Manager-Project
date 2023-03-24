import React from "react"

const Table = ({data})=>{
    return(
        <table className="table">
                    <tr className="table-heading">
                        <td className="checkbox"> <input type="checkbox" /></td>
                        <td>Name</td>
                        <td>Designation</td>
                        <td>Company</td>
                        <td>Industry</td>
                        <td>Email</td>
                        <td>Phone number</td>
                        <td>Country</td>
                        <td>Action</td>
                    </tr>
                {
                    data.map((item)=>
                    <tr className="table-data">
                        <td className="checkbox"><input type="checkbox" /></td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>....</td>
                        <td>...</td>
                        <td id="Email">{item.email}</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                    
                    )
                }
                </table>
    )
}

export default Table