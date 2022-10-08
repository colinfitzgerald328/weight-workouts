import Head from "next/head";
import react from "react";
import MenuBar from "./MenuBar";
import TypeCards from "./TypeCards";
import WorkoutCards from "./WorkoutCards";
import styles from "./styles.module.css"
import MenuPage from "../pages/menu";


class Root extends react.Component {
    constructor(props) {
        super(props)
        this.state=({"loggedIn": false})
    }

    render() {
        if (this.state.loggedIn) {
        return(
            <div className={styles.basic}>
                <MenuPage/>
            </div>
        ) } else {
            return(<div></div>)
        }
    }
}

export default Root