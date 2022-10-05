import Head from "next/head";
import Link from "next/link";
import react from "react";
import MenuBar from "../components/MenuBar";
import WorkoutBar from "../components/WorkoutBar";
import styles from "./styles.module.css"


class LogWorkoutPage extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.basic}>
                <Head>
                    <title>Weight Workouts - by Colin FitzGerald</title>
                    <meta></meta>
                </Head>
                <MenuBar/>
            </div>
        )
    }
}

export default LogWorkoutPage