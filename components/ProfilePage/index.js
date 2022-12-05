import UserProfile from "../UserProfile";
import UpdateProfilePopup from "../UpdateProfilePopup";
import { Button, Loading } from "@nextui-org/react";
import react from "react";
import styles from "./styles.module.css"


class ProfilePage extends react.Component {
    constructor(props) {
        super(props)
        this.state = {showPopup: false, loading: true}

    }

    showPopup() {
        this.setState({showPopup: true})
    }

    hidePopup() {
        this.setState({showPopup: false})
    }

    render() {
        let popup;
        if (this.state.showPopup == true) {
            popup = <UpdateProfilePopup onDismiss={this.hidePopup.bind(this)}/>;
        } else {
            popup = <div></div>;
        }
        return (
            <div className={styles.container}>
                <div className={styles.flexContainer}>
                    <Button css={{width: "100%"}}onClick={this.showPopup.bind(this)}>Update Profile</Button>
                    {popup}
                </div>
                <UserProfile/>
            </div>
        )
    }
}

export default ProfilePage



