import Head from "next/head";
import react from "react";
import WorkoutMenuBar from "../components/WorkoutMenuBar";
import TypeCards from "../components/TypeCards";
import WorkoutCards from "../components/WorkoutCards";
import {Loading} from "@nextui-org/react";
import styles from "./styles.module.css"


class WorkoutPage extends react.Component {
    constructor(props) {
        super(props)
        this.state = {data: [], stats: [], loading: true}
    }

    componentDidMount() {
        this.getWorkoutDetails.bind(this)()
        this.getWorkoutStats.bind(this)()
        this.setState({loading: false})
    }


    getWorkoutDetails() {

        const xhr = new XMLHttpRequest();
        const self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = JSON.parse(xhr.responseText);
                self.setState({data: data["workout_details"]})
            }
        }


        const theUrl = "https://winter-cogency-367402.uc.r.appspot.com/getWorkout?timestamp=" + this.props.timestamp + "&account_id=" + localStorage.getItem("accountId")

        xhr.open("GET", theUrl, true); // true for asynchronous 
        xhr.send(null);
    }

    getWorkoutStats() {

        const xhr = new XMLHttpRequest();
        const self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = JSON.parse(xhr.responseText);
                self.setState({stats: data["workout_stats"][0]})
            }
        }


        const theUrl = "https://winter-cogency-367402.uc.r.appspot.com/getWorkoutStats?timestamp=" + this.props.timestamp + "&account_id=" + localStorage.getItem("accountId")

        xhr.open("GET", theUrl, true); // true for asynchronous 
        xhr.send(null);
    }

    render() {
        if (this.state.loading) {
            return (
                <div className={styles.basic}>
                    <Head>
                        <title>Weight Workouts - by Colin FitzGerald</title>
                        <meta></meta>
                        <link rel="icon"
                              href="https://colinfitzgerald328.github.io/assets/images/FitzGerald-Colin-Homework%206-01.jpg"/>
                    </Head>
                    <WorkoutMenuBar/>
                    <div className={styles.loadingSpinner}>
                        <Loading/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.basic}>
                    <Head>
                        <title>Weight Workouts - by Colin FitzGerald</title>
                        <meta></meta>
                        <link rel="icon"
                              href="https://colinfitzgerald328.github.io/assets/images/FitzGerald-Colin-Homework%206-01.jpg"/>
                    </Head>
                    <WorkoutMenuBar/>
                    <div className={styles.typeCards}>
                        <TypeCards type={this.state.stats.exercise_type} length={this.state.stats.length}/>
                    </div>
                    <div className={styles.workoutCardsMargin}>
                        <WorkoutCards data={this.state.data}/>
                    </div>
                </div>
            )
        }
    }
}

export default WorkoutPage

export async function getServerSideProps(context) {

    const timestamp = context.query.timestamp ?? null;
    const props = {timestamp: timestamp};
    return {
        props: props
    }
}