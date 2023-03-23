import React from "react";
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

  function submithandler() {}
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
        </main>
      </center>
    </>
  );
}
export default Signup;
