import React, { Component } from "react";
import Logo from "../vet-wallet-guy.png"
import { useState } from "react"
import { __esModule } from "@testing-library/jest-dom/dist/matchers";


const axios = require('axios');
const baseURL = 'http://3.16.156.31:3000/user/api/v1/';


const walletSub = () => {
    // save input as variables

    // pass username and password params to API/backend


    // axios({
    //     method: 'post',
    //     url: baseURL + 'registerAndEnrollUser',
    //     data: {
    //         fabricUserName: 'dio',
    //         password: 'diopw'
    //     }
    // });
    // backend does stuff and creates account


    // connect account and go to home page
    alert('im doin stuff');
    window.location.assign('./Home');
}

export default class CreateWallet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            pw: props.pw
        }
    }

    updateName(e) {
        this.setState({name: e.target.value})
    }

    updatePw(e) {
        this.setState({pw: e.target.value})
    }

    render() {
        return (
            <div className="create-page">
                <header className="app-header">
                    <img className="logo" src={Logo} />
                    <p className="app-title">Vet wallet</p>
                </header>

                <button className="backToSetup" onClick={() => window.location = '/'}>
                    Back
                </button>

                <h1 className="create-wallet-text">Create Your Wallet</h1>
                <div className="connect-body">
                    <h1>Please type a <br></br>Username and Password!</h1>

                    <form className="username-password">
                        Username: 
                        <input 
                        type="text" 
                        id="username" 
                        required
                        value={this.state.name}
                        // onChange={this.handleNameChange.bind(this)}
                        onChange={this.updateName.bind(this)}
                        /> <br></br>
                        
                        <br></br>
                        Password: 
                        <input className='password' 
                        type="text" 
                        id="pw" 
                        required
                        value={this.state.pw}
                        onChange={this.updatePw.bind(this)}
                        /> 
                        <br></br>
                    </form><br></br>

                    <button className="enrollAndRegister" onClick={walletSub}>
                        Submit
                    </button>

                    <p>{this.state.name}</p>
                    <p>{this.state.pw}</p>
                </div>

            </div>
        );
    }
}