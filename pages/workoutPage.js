import Head from "next/head";
import react from "react";
import WorkoutMenuBar from "../components/WorkoutMenuBar";
import TypeCards from "../components/TypeCards";
import WorkoutCards from "../components/WorkoutCards";
import styles from "./styles.module.css"


class WorkoutPage extends react.Component {
    constructor(props) {
        super(props)
        this.state={data: [], stats: []}
    }

    componentDidMount() {
        this.getWorkoutDetails.bind(this)()
        this.getWorkoutStats.bind(this)()
    }


    getWorkoutDetails() {

        var xhr = new XMLHttpRequest();
        var self = this
        xhr.onreadystatechange = function() { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                self.setState({data: data["workout_details"]})
            }
        }


        const theUrl = "https://weight-workouts.uc.r.appspot.com/getWorkout?timestamp=" + this.props.timestamp + "&account_id=" + localStorage.getItem("accountId")

        xhr.open("GET", theUrl, true); // true for asynchronous 
        xhr.send(null);
    }

    getWorkoutStats() {

        var xhr = new XMLHttpRequest();
        var self = this
        xhr.onreadystatechange = function() { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                self.setState({stats: data["workout_stats"][0]})
            }
        }


        const theUrl = "https://weight-workouts.uc.r.appspot.com/getWorkoutStats?timestamp=" + this.props.timestamp + "&account_id=" + localStorage.getItem("accountId")

        xhr.open("GET", theUrl, true); // true for asynchronous 
        xhr.send(null);
    }

    render() {
        var workoutCardDivs = this.state.data.map (data => {
            var timestamp = data["TIMESTAMP"]
            var exercise_type = data["exercise_type"]
            var reps = data["reps"]
            var weight = data["weight"]

            return(
                <div key={timestamp}>
                    <WorkoutCards timestamp={timestamp} exercise_type={exercise_type} reps={reps} weight={weight}/>
                </div>
            )});
        return(
            <div className={styles.basic}>
                <Head>
                    <title>Weight Workouts - by Colin FitzGerald</title>
                    <meta></meta>
                    <link rel="icon" href="https://colinfitzgerald328.github.io/assets/images/FitzGerald-Colin-Homework%206-01.jpg"/>
                </Head>
                <WorkoutMenuBar/>
                <TypeCards type={this.state.stats.exercise_type} length={this.state.stats.length}/>
                {workoutCardDivs}
            </div>
        )
    }
}

export default WorkoutPage

export async function getServerSideProps(context) {
    
    var timestamp = context.query.timestamp ?? null
    var props = {timestamp: timestamp}
    return {
        props: props
    }
}