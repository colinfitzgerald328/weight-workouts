import Head from "next/head";
import Link from "next/link";
import UserProfile from "../UserProfile";
import react from "react";
import styles from "./styles.module.css"


class ProfilePage extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.container}>
                    <div className={styles.flexContainer}>
                        <div className={styles.plus} onClick={this.addDetailsPopup}>
                            Add details
                        </div>
                        <div className={styles.minus} onClick={this.EditDetails}>
                            Update details
                        </div>
                    </div>
                    <UserProfile/>
            </div>
        )
    }
}

export default ProfilePage