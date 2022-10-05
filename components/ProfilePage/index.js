import Head from "next/head";
import Link from "next/link";
import react from "react";
import styles from "./styles.module.css"


class ProfilePage extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>
                            Type
                        </div>
                        <div className={styles.actualType}>
                        Legs
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ProfilePage