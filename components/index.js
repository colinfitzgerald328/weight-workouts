import Head from "next/head";
import react from "react";
import MenuBar from "./MenuBar";
import TypeCards from "./TypeCards";
import WorkoutCards from "./WorkoutCards";
import styles from "./styles.module.css";
import NewUserPopup from "./NewUserPopup";
import MenuPage from "../pages/menu";
import { toaster } from "evergreen-ui";


class Root extends react.Component {
    constructor(props) {
        super(props)
        this.state=({loggedIn: false, password: "", username: "", showPopup: false, data:{}, results:{}, account_id: [], operation:{}})
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem('loggedInState')) {
            this.setState({loggedIn: true})
        }
    }

    logOut() {
        window.localStorage.clear();
        this.setState({loggedIn: false, data: {},  operation: {}})
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
        var xhr = new XMLHttpRequest();
        var self = this
        xhr.onreadystatechange = function() { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                localStorage.setItem('loggedInState', true)
                var data = JSON.parse(xhr.responseText)
                self.setState({operation: data["operation"]})
                if (data["operation"] == 'success') {
                    localStorage.setItem('accountId', data["account_info"][0]["account_id"])
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
        xhr.open('POST', 'https://weight-workouts.uc.r.appspot.com/login');

        // set `Content-Type` header
        xhr.setRequestHeader('Content-Type', 'application/json');

        // send rquest with JSON payload
        xhr.send(JSON.stringify(json));
    }

    render() {
        if (this.state.operation == 'success' || this.state.loggedIn) {
        return(
            <div className={styles.basic}>
                <MenuPage account_id={this.state.account_id} onLogOut={this.logOut.bind(this)}/>
            </div>
        ) } else {
            if (this.state.showPopup == true) {
                var popup = <NewUserPopup onDismiss={this.hidePopup.bind(this)}/>
            } else {
                var popup = <div></div>
            }
            var cfLogo = "https://colinfitzgerald328.github.io/assets/images/FitzGerald-Colin-Homework%206-01.jpg"
            return (
                    <div className={styles.formContainer}>
                    <Head>
                        <title>Weight Workouts | Login Page</title>
                        <meta name="description" content="Transaction history"/>
                        <link rel="icon" href="https://colinfitzgerald328.github.io/assets/images/FitzGerald-Colin-Homework%206-01.jpg"/>
                    </Head>
                    <div className={styles.form}>
                            <img className={styles.img} src={cfLogo}/>
                            <div className={styles.commandOperator}>
                                Weight Workouts
                            </div>
                            <div className={styles.flexContainer}>
                                <input className={styles.item1} type="text" name="name" placeholder="username" value={this.state.value} onChange={this.handleUsername}/>
                                <input className={styles.item2} type="password" name="name" placeholder="password" value={this.state.value} onChange={this.handlePassword}/>
                            </div>
                            <div className={styles.submit} onClick={this.handleSubmit}>
                                Submit
                            </div>
                            <div className={styles.addNewUser}>
                                New here? Click this button to create a profile
                            </div>
                            <div onClick={this.showPopup.bind(this)} className={styles.submit}>
                                Create
                            </div>
                            {popup}
                        </div>
                        </div>
            )
        }
    }
}

export default Root