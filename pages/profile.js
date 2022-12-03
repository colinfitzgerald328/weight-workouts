import Head from "next/head";
import Link from "next/link";
import react from "react";
import ProfilePage from "../components/ProfilePage";
import ProfileMenuBar from "../components/ProfileMenuBar";
import MenuBar from "../components/MenuBar";
import WorkoutBar from "../components/WorkoutBar";
import styles from "./styles.module.css"


class Profile extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.basic}>
                <Head>
                    <title>Weight Workouts - by Colin FitzGerald</title>
                    <meta></meta>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200&display=swap"
                          rel="stylesheet"></link>
                </Head>
                <ProfileMenuBar/>
                <ProfilePage/>
            </div>
        )
    }
}

export default Profile