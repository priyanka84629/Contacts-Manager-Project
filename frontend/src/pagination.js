import React,{useState} from "react"
import ReactPaginate from "react-paginate"
const Pagination = ({data})=>{
// const [currentPage,setCurrentPage] = useState(1)
// const recordsPerPage = 5;
// const lastIndex = currentPage*recordsPerPage
// const firstIndex = lastIndex - recordsPerPage;
// const records = data.slice(firstIndex,lastIndex)
// const npage = Math.ceil(data.length/recordsPerPage)
// const numbers = [...Array(npage+1).keys()].slice(1)

    return(
<>
    <nav>
        <ul className="pagination"></ul>
        <li className></li>
        
    </nav>
</>

    )
}

export default Pagination