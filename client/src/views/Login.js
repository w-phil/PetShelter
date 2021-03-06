import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [formInfo, setFormInfo] = useState({
        email:"",
        password:""
    })
    const history = useHistory();

    const [errorMsg, setErrorMsg] = useState("");

    const changehandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        axios.post("/api/login", formInfo, {withCredentials:true})
            .then(res => {
                console.log(res);                
                if (res.data.msg == "success!") {
                    history.push("/");
                } else {
                    setErrorMsg(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <h1>Login below</h1>
            <form onSubmit={login}>
                {errorMsg?<p className="text-danger">{errorMsg}</p>:""}
                <div className="form-group">
                    <p>Email</p>
                    <input type="email" className="form-control" name="email" onChange={changehandler}/>
                </div>
                <div className="form-group">
                    <p>Password</p>
                    <input type="password" className="form-control" name="password" onChange={changehandler}/>
                </div>
                <div id="logreg">
                    <input type="submit" value="login" className="btn-btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default Login;