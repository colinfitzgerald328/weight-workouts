import Head from "next/head";
import Link from "next/link";
import UserProfile from "../UserProfile";
import UpdateProfilePopup from "../UpdateProfilePopup";
import react from "react";
import styles from "./styles.module.css"


class ProfilePage extends react.Component {
    constructor(props) {
        super(props)
        this.state={showPopup: false}
        
    }

    showPopup() {
        this.setState({showPopup: true})
    }

    hidePopup() {
        this.setState({showPopup: false})
    }

    render() {
        if (this.state.showPopup == true) {
            var popup = <UpdateProfilePopup onDismiss={this.hidePopup.bind(this)}/>
        } else {
            var popup = <div></div>
        }
        return(
            <div className={styles.container}>
                    <div className={styles.flexContainer}>
                        <div className={styles.plus} onClick={this.showPopup.bind(this)}>
                            Add or update details
                        </div>
                        {popup}
                    </div>
                    <UserProfile/>
            </div>
        )
    }
}

export default ProfilePage