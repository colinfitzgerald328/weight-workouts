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
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200&display=swap" rel="stylesheet"></link>
                </Head>
                <MenuBar/>
                <TypeCards/>
                <WorkoutCards/>
                <WorkoutCards/>
                <WorkoutCards/>
                <WorkoutCards/>
            </div>
        )
    }
}

export default Root