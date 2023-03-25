import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './login.css';


const Login = (props) => {
    const navigate = useNavigate()
    const [data, setData] = useState({ email: "", password: "" })
    const [visibility, setVisibility] = useState("password")
    const [switchIcon, setSwitchIcon] = useState(true)
    const [valid, setValid] = useState(false)
    const [message, setMessage] = useState({status:"", message:""})
    useEffect(()=>{
        const getUserDetails = JSON.parse(localStorage.getItem("token"))
    if(getUserDetails){
        navigate("/home")
    }
    },[])
    
    
    const handleSubmit = async (e) => {
        e.preventDefault(e)
        if(data.password.length>5){
            axios.post('https://contact-manager-ch1v.onrender.com/login', data)
            .then(result => {
                localStorage.setItem('token',JSON.stringify(result.data.message.token))
                localStorage.setItem('userdetails',JSON.stringify(result.data.message.userdetails))
                navigate('/home')
            }).catch((e) => {
                setMessage(e?.response?.data)
                setValid(true)
            })
        }
        else{
            setMessage({status:"Note!",message:"Password length should be minimum 6 charecters and above "})
            setValid(true)
        }
        
    }


    return (
        <React.Fragment>
            <main className='main-cont '>
               
                {/* <section className='row container border m-5 br-5 rounded-2 form-container'>
                    <div className="col"> */}
 <section className='form-container col-lg-10'>
 <div className="row d-flex align-items-center justify-content-center ">
   <div className="col-8  d-flex align-items-center justify-content-center" style={{ textAlign: "center" }}>
                                <div className="row">

                                    <div className="col">
                                        <div className="row">
                                            <h1 className='logo'>Contact Manager</h1>
                                            <p>Enter your credentials to access your account</p>
                                            <div className="row d-flex justify-content-around align-items-center h-100">
                                                <div className="col-lg-10">
                                                    <form onSubmit={handleSubmit}>
                                                        <div className='col-sm-12 inputBox'>
                                                        <input className='form-control m-2 px-5' type='email' name="email" placeholder='User Id' required onChange={(e) => setData({ ...data, email: e.target.value })} />
                                                        
                                                        </div>
                                                       
                                                        <div className='col-sm-12 inputBox'>
                                                        <input className='form-control m-2 px-5 ' type={visibility} name='password' placeholder='Password' required onChange={(e) => setData({ ...data, password: e.target.value })} />
                                                    
                                                        
                                                        </div>
                                                        
                                                        <button className='signin m-2 p-1 rounded-2'>Sign In</button>
                                                        <Link to={'/signup'}><button className='signUp m-2 p-1 rounded-2'>Sign Up</button></Link>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           

                        </div>
                    {/* </div>
                </section> */}
                </section>

                <Validation trigger={valid}>
                <div className='card-message'>
                    <h3>{message.status}</h3>
                    <p>{message.message}</p>
                    <button onClick={()=>setValid(false)}>ok</button> 
                </div>
                
            </Validation>
            </main>
        </React.Fragment>
    );
}
const Validation=(props)=>{
    return(props.trigger)?(
        <div className='popupCard'>
            {props.children}
        </div>
    ):""
}

export default Login;