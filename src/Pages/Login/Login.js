import "./Login.css";
import axios from "axios";

import { MdAlternateEmail, MdVpnKey } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const Navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userLogin = await axios.post("http://localhost:4000/Login", formInfo).then(Navigate("/"));
        localStorage.setItem("userToken", userLogin.data.token);
        const userInfo = await axios.get("http://localhost:4000/users");
        console.log(userInfo.data);
    };

    const fillForm = () => {
        setFormInfo({ email: "p01@example.com", password: "Farkash1233" });
    };

    return (
        <div className="loginFormContainer">
            <h2 style={{ color: "white" }}>Login</h2>
            <form onSubmit={(e) => handleSubmit(e)} className="form">
                <img style={{ width: "60%" }} src="/Logo/logo.png" />

                <div className="formField">
                    <label>
                        <MdAlternateEmail />
                        {"   "}
                        Email
                    </label>
                    <input
                        value={formInfo?.email}
                        type="email"
                        required
                        onChange={(e) => setFormInfo({ ...formInfo, email: e.target.value })}
                    />
                </div>
                <div className="formField">
                    <label>
                        <MdVpnKey />
                        {"   "}Password
                    </label>
                    <input
                        value={formInfo?.password}
                        required
                        type="password"
                        onChange={(e) => setFormInfo({ ...formInfo, password: e.target.value })}
                    />
                </div>
                <button>Submit</button>
            </form>
            <button onClick={() => fillForm()}>Autofill Form</button>
        </div>
    );
};

export default Login;
