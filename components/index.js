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
        return(<div>
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