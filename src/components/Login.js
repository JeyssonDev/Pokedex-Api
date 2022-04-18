import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import pokeball from "../images/pngwing.com.png";
import pokedeximg from "../images/image 11.png";

const Login = () => {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        dispatch({
            type: "GET_USERNAME",
            payload: userName,
        });
        setUserName("");
        navigate("/pokedex");
    };

    return (
        <div className="login">
            <img src={pokedeximg} alt="pokedex" />
            <h1 className="welcome-text">¡Hello trainer!</h1>
            <p>Give your name to start</p>
            <form action="" onSubmit={submit}>
                <input
                    placeholder="Your name..."
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                <button className="begin-button">Begin</button>
            </form>

            <div className="footer">
                <a href="/">
                    {" "}
                    <img src={pokeball} alt="pokeball" />{" "}
                </a>
                <div className="rectangle147"></div>
                <div className="rectangle148"></div>
            </div>
        </div>
    );
};

export default Login;
