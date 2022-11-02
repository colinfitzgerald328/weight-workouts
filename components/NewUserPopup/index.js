import React from "react"
import styles from './styles.module.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
class AddConsultantPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {username: '', password: ''}
        this.getUsername = this.getUsername.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getUsername(event) {
        this.setState({username: event.target.value});
    }

    getPassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit() {
        console.log(this.state)
        // listen for `load` event
        var xhr = new XMLHttpRequest();
        var self = this
        xhr.onreadystatechange = function() { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                self.setState({data: data})
            }
        }   

        // create a JSON object
        const json = {
            "username": this.state.username,
            "password": this.state.password, 
        };

        // open request
        xhr.open('POST', 'https://winter-cogency-367402.uc.r.appspot.com/addUser');

        // set `Content-Type` header
        xhr.setRequestHeader('Content-Type', 'application/json');

        // send rquest with JSON payload
        xhr.send(JSON.stringify(json));
        this.props.onDismiss()
    }

    render() {
        return(
            <div className={styles.formContainer}>
                <div className={styles.form}>
                    <div className={styles.topWrapper}>
                    <div className={styles.addNewConsultant}>
                        Create new account
                    </div>
                    <div onClick={() => this.props.onDismiss()} className={styles.dismiss}>
                        <CloseRoundedIcon/>
                    </div>
                    </div>
                    <span className={styles.divider}></span>
                    <div className={styles.basicWrapper}>
                        <div className={styles.container}>
                        <div className={styles.accountId}>
                            Username
                        <input className={styles.test1} type="text" name="name" username={this.state.value} onChange={this.getUsername}/>
                        </div> 
                        </div>
                    </div>
                    <div className={styles.basicWrapper}>
                        <div className={styles.container}>
                        <div className={styles.accountId}>
                            Password
                        <input className={styles.test1} type="text" name="name" password={this.state.value} onChange={this.getPassword}/>
                        </div> 
                        </div>
                    </div>
                    <div onClick={() => this.handleSubmit()} className={styles.submit}>
                        CONFIRM
                    </div>
                </div>
            </div>
        )
    }
}


export default AddConsultantPopup