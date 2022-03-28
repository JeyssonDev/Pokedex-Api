import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css'
import pokeball from '../images/pngwing.com.png';

const Login = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch({
         type: "GET_USERNAME",
         payload: userName
    });
    setUserName("");
    navigate("/pokedex");
  };

  return (
    <div className="login">
        

          <img src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1649030400&Signature=fCIz2ZeUoOwcLoGA9hStJyM7yJlGojwkpTp26S5UXyP10yG4NJeEpco5IDJ8fmnmst5YkUYr7giQQExHVH927cqdoAJe-kPEgtGFLIBqDDGlgeGtiVEeQzqcGSlfNk~Y3sxK12OypxunXCabBSiWkRRlk6z8nPWeUnaYxD9yf3y5qT4zKtLiXJdatifHK0poj2feMVRO36z1o2zOeje7PEMBwV5unNuyiK3-j-CmSqTwqU~NJI2MqiBkNtVICefVk7BYnH7fPGEpjo4~4k3vr7sTJaQnR~ET0RBEGi9EQh5WpTC~LR-QjGsdOTPGDIHze3YbaXW7VUJF6BLs10RsrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="pokedex" />
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
        <a href="/"> <img src={pokeball} alt="pokeball"/> </a> 
        <div className="rectangle147"></div>
        <div className="rectangle148"></div>
      </div>
    </div>
  );
};

export default Login;