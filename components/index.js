import Head from "next/head";
import react from "react";
import MenuBar from "./MenuBar";
import TypeCards from "./TypeCards";
import WorkoutCards from "./WorkoutCards";
import styles from "./styles.module.css"


class Root extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.basic}>
                <Head>
                    <title>Weight Workouts - by Colin FitzGerald</title>
                    <meta></meta>
                    <link rel="icon" href="https://colinfitzgerald328.github.io/assets/images/FitzGerald-Colin-Homework%206-01.jpg"/>
                </Head>
                <MenuBar/>
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

export default Root