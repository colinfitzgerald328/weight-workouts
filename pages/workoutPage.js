import Head from "next/head";
import react from "react";
import WorkoutMenuBar from "../components/WorkoutMenuBar";
import TypeCards from "../components/TypeCards";
import WorkoutCards from "../components/WorkoutCards";
import styles from "./styles.module.css"


class WorkoutPage extends react.Component {
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
                    <link rel="icon" href="https://colinfitzgerald328.github.io/assets/images/FitzGerald-Colin-Homework%206-01.jpg"/>
                </Head>
                <WorkoutMenuBar/>
                <TypeCards/>
                <WorkoutCards/>
                <WorkoutCards/>
                <WorkoutCards/>
                <WorkoutCards/>
                <WorkoutCards/>
                <WorkoutCards/>
                <WorkoutCards/>
                <WorkoutCards/>
            </div>
        )
    }
}

export default WorkoutPage