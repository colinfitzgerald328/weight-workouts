import Head from "next/head";
import react from "react";
import TopBar from "./TopBar";
import TypeCards from "./TypeCards";
import WorkoutCards from "./WorkoutCards";
import styles from "./styles.module.css"


class Root extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.main}>
                <Head>
                    <title>Weight Workouts - By Colin FitzGerald</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <TopBar/>
                    <TypeCards/>
                    <WorkoutCards/>
                </Head>
                
            </div>
        )
    }
}

export default Root 