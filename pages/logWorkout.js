import Head from "next/head";
import Link from "next/link";
import react from "react";
import CustomMenuBar from "../components/CustomMenuBar";
import WorkoutBar from "../components/WorkoutBar";
import styles from "./styles.module.css"
import { useRouter } from 'next/router'


class LogWorkoutPage extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.data)
        return(
            <div className={styles.basic}>
                <Head>
                    <title>Weight Workouts - by Colin FitzGerald</title>
                    <meta></meta>
                </Head>
                <CustomMenuBar/>
            </div>
        )
    }
}

export default LogWorkoutPage