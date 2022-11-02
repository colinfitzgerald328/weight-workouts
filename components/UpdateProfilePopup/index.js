import React from "react"
import styles from './styles.module.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { toaster } from "evergreen-ui";
import { SettingsRemoteOutlined } from "@mui/icons-material";
class UpdateProfilePopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {username: '', password: '', image: null, url: ''}
        this.getUsername = this.getUsername.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
    }

    getUsername(event) {
        this.setState({username: event.target.value});
    }

    getPassword(event) {
        this.setState({password: event.target.value});
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          this.setState({
            image: img
          });
        }
      };

    uploadImage() {
        const data = new FormData() 
        data.append("file", this.state.image)
        data.append("upload_preset", "kvc17geu")
        data.append("cloud_name", "dbq7j2qmy")
        fetch("https://api.cloudinary.com/v1_1/dbq7j2qmy/image/upload", {
            method: "post",
            body: data})
        .then(resp => resp.json())
        .then(data => {
            this.setState({url: data.url})
        })
        .catch(err => console.log(err))
    }

    handleSubmit() {
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
            "account_id": localStorage.getItem("accountId"), 
            "name": this.state.username,
            "city": this.state.password, 
            "image_url": String(this.state.url)
        };

        // open request
        xhr.open('POST', 'https://winter-cogency-367402.uc.r.appspot.com/updateUserProfile');

        // set `Content-Type` header
        xhr.setRequestHeader('Content-Type', 'application/json');

        // send rquest with JSON payload
        xhr.send(JSON.stringify(json));
        toaster.success("Profile successfully updated")
        this.props.onDismiss()
    }

    render() {
        console.log(this.state.url)
        return(
            <div className={styles.formContainer}>
                <div className={styles.form}>
                    <div className={styles.topWrapper}>
                    <div className={styles.addNewConsultant}>
                        Update Profile Details
                    </div>
                    <div onClick={() => this.props.onDismiss()} className={styles.dismiss}>
                        <CloseRoundedIcon/>
                    </div>
                    </div>
                    <span className={styles.divider}></span>
                    <div className={styles.basicWrapper}>
                        <div className={styles.container}>
                        <div className={styles.accountId}>
                            Name
                        <input className={styles.test1} type="text" name="name" username={this.state.value} onChange={this.getUsername}/>
                        </div> 
                        </div>
                    </div>
                    <div className={styles.basicWrapper}>
                        <div className={styles.container}>
                        <div className={styles.accountId}>
                            City
                        <input className={styles.test1} type="text" name="name" password={this.state.value} onChange={this.getPassword}/>
                        </div> 
                        </div>
                    </div>
                    <div className={styles.basicWrapper}>
                    <div className={styles.container}>
                        <div className={styles.accountId}>
                            Profile Image
                        <input className={styles.test44} type="file" name="name" password={this.state.value} onChange={this.onImageChange}/>
                        </div> 
                        </div>
                    </div>
                    <div className={styles.basicWrapper}>
                    <div onClick={() => this.uploadImage()} className={styles.uploadImage}>
                            Click to Confirm Upload
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


export default UpdateProfilePopup