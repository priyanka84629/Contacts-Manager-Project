import React from "react";
import axios from 'axios'
import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const navigate2=useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [message, setMessage] = useState({ status: "", message: "" });

  const submithandler= async (e)=>{
    e.preventDefault()
    if(confirmPassword==data.password){
        axios.post('',data)
        .then(result=>{
            navigate('/')
        }).catch((e)=>{
            setMessage(e)
            setValid(true)
        })
    }else{
        setMessage({status:'',message:"Password and Confirm Passwords did not match!"})
    setValid(true)
    }
  }
  return (
    <>
      <center>
        <main className="main-cont">
          <section className="form-container col-lg-10">
            <div className="row">
              <h1>Contact Manager</h1>
              <p>Sign Up</p>
              <div className="form">
                <form onSubmit={submithandler}>
                  <div className="emails">
                    <input
                      className="email"
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      required
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="password">
                    <input
                      className="pass"
                      type="password"
                      name="password"
                      placeholder="Enter a Password"
                      required
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="confirm-password">
                    <input
                      className="cnf-pass"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm your Password"
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button className='signin'>Sign Up</button>
 <Link to={'/'}><button className='signin'>Sign In</button></Link>
                </form>
              </div>
            </div>
          </section>
          <Validation trigger={valid}>
                <div className='card-message'>
                    <h3>{message.status}</h3>
                    <p>{message.message}</p>
                    <button onClick={()=>setValid(false)}>ok</button> 
                </div>
                
            </Validation>
        </main>
      </center>
    </>
  );
}
export default Signup;
const Validation=(props)=>{
    return(props.trigger)?(
        <div className='popupCard'>
            {props.children}
        </div>
    ):""
}
