import React,{useState} from "react"
const Table = ({data})=>{
    //------------------pagination-------------------
const [currentPage,setcurrentPage] = useState(1)
const[itemPerPage,setitemPerPage] = useState(5)

const handleClick = (event)=>{
setcurrentPage(Number(event.target.id))
}
const pages =[];
for(let i=1;i<=Math.ceil(data.length/itemPerPage);i++){
    pages.push(i);
}
const indexOFLastItem = currentPage*itemPerPage;
const indexOFFirstItem = indexOFLastItem - itemPerPage;
const currentItems = data.slice(indexOFFirstItem,indexOFLastItem)


const renderPageNumber = pages.map(number=>{
    return (
        <li key={number} id={number} onClick={handleClick}>
            {number} 
        </li>
    )
})
//--------------------------------------------
    return(
        <div>
        <table className="table">
                    <tr className="table-heading">
                        <td className="checkbox"> <input type="checkbox" /></td>
                        <td className="column">Name</td>
                        <td className="column">Designation</td>
                        <td className="column">Company</td>
                        <td className="column">Industry</td>
                        <td className="column">Email</td>
                        <td className="column">Phone number</td>
                        <td className="column">Country</td>
                        <td>Action</td>
                    </tr>
                {
                    currentItems.map((item)=>
                    <tr className="table-data">
                        <td className="checkbox"><input type="checkbox" /></td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>....</td>
                        <td>...</td>
                        <td id="Email">{item.email}</td>
                        <td>...</td>
                        <td>...</td>
                        <td>
                            <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <button><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                        </td>
                    </tr>
                    
                    )
                }
                </table>
                <ul className="pageNumber">{renderPageNumber}</ul>
                </div>
    )
}

export default Table