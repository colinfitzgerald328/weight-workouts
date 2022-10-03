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
            <div>
                <Head>
                    <title>Weight Workouts - By Colin FitzGerald</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
                </Head>
                
            </div>
        )
    }
}

export default Root 