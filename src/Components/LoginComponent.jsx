import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core';
import login from '../Services/service'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            message: "",
            Error: false,
        }
    }
    handleUserChange = (event) => {
        var emailId = event.target.value;
        this.setState({ email: emailId })
        console.log("email");

    }
    handlePasswordChange = (event) => {
        var password = event.target.value;
        this.setState({ password: password })
        console.log("password");

    }


    handleSubmit = () => {
        const userLoginDetails = {

            "email": this.state.email,
            "password": this.state.password,
        }
        console.log("login", userLoginDetails)
        login(this.state.email, this.state.password).then(res => {
            console.log(res.clone().json())
            return res.json()
            //this.props.history.push('/Dashboard')
        }).then((key) => {
            console.log(key)
            this.setState({
                token: key.token,
                role: key.role
            })
            console.log("token---->", this.state.token)
            console.log("role--->", this.state.role)
            localStorage.setItem("token--->",this.state.token)
            localStorage.getItem("token--->",this.state.token)
            // sessionStorage.setItem("token", this.state.token)
            // sessionStorage("role", this.state.role)
            // console.log("role---->", sessionStorage.getItem("token"))
            this.props.history.push('/Dashboard')
        }).catch((err) => {
            //this.props.history.push('/Dashboard')
            console.log("eror-->",err)
            this.setState({
                message: 'User does not exist',
                email: '',
                password: '',
            });
        })



    }

    render() {
        return (
            <div>
                <AppBar position="static" className="title">
                    <Toolbar><h1 >Bhavana Devops</h1></Toolbar></AppBar>
                <div className="login" title="Login">

                    <div className="mainlogin">
                        <div>
                            <TextField id="outlined-basic" label="Username" variant="outlined"
                                value={this.state.email}
                                type="email"
                                onChange={this.handleUserChange}
                            />
                        </div>
                        <br />
                        <div>
                            <TextField id="outlined-basic" label="Password" variant="outlined"
                                value={this.state.password}
                                type="password"
                                onChange={this.handlePasswordChange}
                            />
                        </div>
                        <span style={{ color: "#b71c1c" }}>{this.state.message}</span>
                        <div className="Button">
                            <Button onClick={() => this.handleSubmit()} color='primary' variant="contained" >Login</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;