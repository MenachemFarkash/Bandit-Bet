import "./Register.css";
import axios from "axios";

import { MdAlternateEmail, MdVpnKey } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Register = () => {
    const Navigate = useNavigate();
    const [formInfo, setFormInfo] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userRegister = await axios.post("http://localhost:4000/register", formInfo).then(Navigate("/"));
        localStorage.setItem("userToken", userRegister.data.token);
    };

    const fillForm = () => {
        setFormInfo({ name: "P01SeN", email: "p01@example.com", password: "Farkash1233" });
    };
    const fillFormHr = () => {
        const number = Math.round(Math.random() * 10000);
        setFormInfo({ name: "VIP Guest", email: `hr${number}@example.com`, password: `HrHr${number}` });
    };

    return (
        <div className="registerFormContainer">
            <h2 style={{ color: "white" }}>Register</h2>
            <form onSubmit={(e) => handleSubmit(e)} className="form">
                <img style={{ width: "60%" }} src="/Logo/logo.png" />
                <div className="formField">
                    <label>
                        <BsPerson />
                        {"   "}
                        Name
                    </label>
                    <input
                        value={formInfo?.name}
                        required
                        onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
                    />
                </div>
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
            <button onClick={() => fillFormHr()}>HR Fast Register</button>
        </div>
    );
};

export default Register;
