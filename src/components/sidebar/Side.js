import React from "react";
import { useNavigate } from "react-router";

function Side() {
  const navigate = useNavigate();

  function handlelogout(){
    localStorage.removeItem("userdetails");
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <>
      <div className="side">
        <div className="side-upper">
          <h1 className="logo">Contact Manager</h1>
          <span>Dashboard</span>

          <div className="side-totalContact">
            <p className="total-contact">
              <span className="total">Total Contacts</span>
            </p>
          </div>
        </div>

        <div className="logout-div">
          <div onClick={handlelogout} className="log-out-cont">
            <span className="logout">Log out</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Side;
