import Head from "next/head";
import react from "react";
import styles from "./styles.module.css";
import NewUserPopup from "./NewUserPopup";
import MenuPage from "../pages/menu";
import { Button } from "@nextui-org/react";
import {toaster} from "evergreen-ui";
import { Input } from '@nextui-org/react';
import NewUserModal from "./NewUser/newUser";


class Root extends react.Component {
    constructor(props) {
        super(props)
        this.state = ({
            loggedIn: false,
            password: "",
            username: "",
            showPopup: false,
            data: {},
            results: {},
            account_id: [],
            operation: {}
        })
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem('loggedInState')) {
            this.setState({loggedIn: true, waiting: false})
        }
        console.log(localStorage.getItem('loggedInState'))
    }

    logOut() {
        window.localStorage.clear();
        this.setState({loggedIn: false, data: {}, operation: {}, password: "", username: ""})
    }


    showPopup() {
        this.setState({showPopup: true})
    }

    hidePopup() {
        this.setState({showPopup: false})
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleUsername(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit() {
        // listen for `load` event
        const xhr = new XMLHttpRequest();
        const self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                localStorage.setItem('loggedInState', true)
                const data = JSON.parse(xhr.responseText);
                self.setState({operation: data["operation"]})
                if (data["operation"] == 'success') {
                    localStorage.setItem('accountId', data["account_info"][0]["account_id"])
                    console.log("success, setting local storage")
                } else {
                    toaster.danger("Wrong password. Please try again!")
                }
            }
        }

        // create a JSON object
        const json = {
            "username": this.state.username,
            "password": this.state.password
        };

        // open request
        xhr.open('POST', 'https://winter-cogency-367402.uc.r.appspot.com/login');

        // set `Content-Type` header
        xhr.setRequestHeader('Content-Type', 'application/json');

        // send request with JSON payload
        xhr.send(JSON.stringify(json));
    }

    render() {
        let popup;
        if (this.state.operation == 'success' || this.state.loggedIn) {
            return (
                <div className={styles.basic}>
                    <MenuPage account_id={this.state.account_id} onLogOut={this.logOut.bind(this)}/>
                </div>
            )
        } else if (this.state.waiting) {
            console.log("waiting, rendered this temporarily")
            return (
                <div className={styles.basic}>
                    <MenuPage account_id={this.state.account_id} onLogOut={this.logOut.bind(this)}/>
                </div>
            )
        } else {
            if (this.state.showPopup == true) {
                popup = <NewUserPopup onDismiss={this.hidePopup.bind(this)}/>;
            } else {
                popup = <div></div>;
            }
            const cfLogo = "https://colinfitzgerald328.github.io/assets/images/FitzGerald-Colin-Homework%206-01.jpg";
            return (
                <div className={styles.formContainer}>
                    <Head>
                        <title>Weight Workouts | Login Page</title>
                        <meta name="description" content="Transaction history"/>
                        <link rel="icon"
                              href="https://colinfitzgerald328.github.io/assets/images/FitzGerald-Colin-Homework%206-01.jpg"/>
                    </Head>
                    <div className={styles.form}>
                        <img className={styles.img} src={cfLogo}/>
                        <div className={styles.commandOperator}>
                            Weight Workouts
                        </div>
                        <div className={styles.flexContainer}>
                            <Input css={{marginBottom: "10px", width: "200px", background: "black"}} type="text" name="name" placeholder="username"
                                   value={this.state.value} onChange={this.handleUsername}/>
                            <Input css={{marginBottom: "10px", width: "200px"}} type="password" name="name" placeholder="password"
                                   value={this.state.value} onChange={this.handlePassword}/>
                        </div>
                        <Button className={styles.submit} onClick={this.handleSubmit}>
                            Submit
                        </Button>
                        <div className={styles.addNewUser}>
                            New here? Click this button to create a profile
                        </div>
                        <NewUserModal/>
                        {popup}
                    </div>
                </div>
            )
        }
    }
}

export default Root