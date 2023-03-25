import React from "react"
import { useState } from "react"
import "./Signin.css"
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate()
    const [userdetail, setuserdetail] = useState({
        email: "",
        password: "",
    })
    const [err, setError] = useState("")

    const handlechange = (e) => {
        setuserdetail({ ...userdetail, [e.target.name]: e.target.value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault()

        await fetch(`http://localhost:4500/signin`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userdetail),
        }).then((data) => {
            return data.json()
        }).then((response) => {
            if (response.status === "failed") {
                setError(response.message)
            } else {
                localStorage.setItem("authtoken", response.token);
                localStorage.setItem("id", response.id);
                navigate("/propertylist")
            }
        }).catch(e => {
            // console.log(e, "e")
            setError("credentials not Match")
            navigate("/")
        })
    }

    return (
        <>
            <div>
                <div id="main-container">
                    <h1 id="heading">LOGO</h1>
                    <h6 id="heading-2">Enter Your Credentials To access your Account</h6>
                    <div id="Signin-form">
                        <form onSubmit={handlesubmit}>
                            <div><input
                                className="Signin-input"
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handlechange}
                                required />
                            </div>
                            <div><input
                                className="Signin-input"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handlechange}
                                required />
                            </div>
                            <div>
                                <button className="Signin-input" id="button-signin" type="submit">Sign In</button>
                                <div id="Signup">
                                    <Link to="/signup">Sign Up</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="error-message">
                    <center> {err && <h5>{err}</h5>}</center>
                </div>
                <div id="noaccount"><h4>Don't have an Account ? <Link to="/signup"> Sign Up</Link>
                </h4>
                </div>
            </div>

        </>
    )
}
export default Signin;

