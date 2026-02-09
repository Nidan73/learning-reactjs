import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [password, showPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const terms = e.target.terms.checked;
    const pattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}+[\]:;<>,.?~\\/-]).+$/;

    setSuccess(false);
    setError("");

    if (!pattern.test(pass)) {
      setError(
        "please include a Upper and lower letter alphabet , length 6 and at least 1 symbol",
      );
      return;
    }

    if (!terms) {
      setError("Please check terms and conditions");
      return;
    }
    createUserWithEmailAndPassword(auth, email, pass, terms)
      .then((result) => {
        console.log(result);
        e.target.reset();
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

    //   console.log()
  };

  const handlePassword = (e) => {
    e.preventDefault();
    showPassword(!password);
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                  />
                  <div className="relative">
                    <label className="label">Password</label>
                    <input
                      type={password ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      name="password"
                    />
                    <button
                      onClick={handlePassword}
                      className="btn btn-xs absolute bottom-2 right-6"
                    >
                      {password ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                    </button>
                  </div>
                  <label class="label">
                    <input name="terms" type="checkbox" className="checkbox" />
                    Accept our Terms and Conditions
                  </label>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              {success && (
                <p className="text-green-500">Accout Register Succesfully</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
