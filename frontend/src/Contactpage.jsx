import React, { useState, useEffect } from "react";
import Table from "./Table";
import { CSVLink } from "react-csv";


function Contactpage() {
  const [data, setdata] = useState([]);
  const [query, setQuery] = useState("");

//--------------------------------------------------------------------
  const search = (data) => {
    console.log(data.filter((item) => item.email.includes(query.trim())));
    return data.filter((item) => item.email.includes(query.trim()));
  };
  const headers = [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Designation",
      key: "designation",
    },
    {
      label: "Company",
      key: "company",
    },
    {
      label: "Industry",
      key: "industry",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Phone number",
      key: "phone number",
    },
    {
      label: "Country",
      key: "country",
    },
  ];
  const csvLink = {
    filename: "file.csv",
    headers: headers,
    data: data,
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        setdata(resp);
      });
    });
  }, []);
  console.log(data);
  return (
    <div>
      <div className="logo">
        <span className="text_logo">Logo</span>
        <div>
          <p className="dashboard">Dashboard</p>
        </div>
        <div className="total_contacts">
          <p className="text_tc">Total contacts</p>
        </div>
        <button className="logout">
          <i class="fa fa-sign-out" aria-hidden="true">
            Log out
          </i>
        </button>
      </div>
      <div className="heading">
        <span className="contact_text">Total Contacts</span>

        <input
          className="search"
          placeholder="Search by Email Id....."
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="user_name">name</span>
        <div className="post">Super Admin</div>
      </div>
      <div>
        <div>
          <input type="date" className="date" lable="select date" />
          <span>
            <button className="filter">filter</button>
          </span>
          <span>
            <button className="delete">
              <i class="fa fa-trash-o" aria-hidden="true"></i>delete
            </button>
          </span>
          <span>
            {" "}
            <button className="import">
              <i class="fa fa-download" aria-hidden="true"></i>import
            </button>
          </span>
          <span>
            <CSVLink {...csvLink}>
              <button className="export">
                <i class="fa fa-upload" aria-hidden="true"></i>export
              </button>
            </CSVLink>
          </span>
          <Table data={search(data)} />        
        </div>
      </div>
    </div>
  );
}
export default Contactpage;
