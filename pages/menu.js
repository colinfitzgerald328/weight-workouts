import Head from "next/head";
import Link from "next/link";
import react from "react";
import MenuBar from "../components/MenuBar";
import WorkoutBar from "../components/WorkoutBar";
import styles from "./styles.module.css"


class MenuPage extends react.Component {
    constructor(props) {
        super(props)
        this.state={data: []}
    }

    componentDidMount() {
        this.getFeed.bind(this)()
    }

    getFeed() {

        var xhr = new XMLHttpRequest();
        var self = this
        xhr.onreadystatechange = function() { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                self.setState({data: data["feed"]})
            }
        }


        const theUrl = "https://weight-workouts.uc.r.appspot.com/getFeed?account_id=" + localStorage.getItem("accountId")

        xhr.open("GET", theUrl, true); // true for asynchronous 
        xhr.send(null);
    }

    render() {
        if (this.state.data != null) {
        var workoutBarDivs = this.state.data.map (data => {
            var timestamp = data["TIMESTAMP"]
            var sets = data["sets"]
            var total_reps = data["total_reps"]
            return(
                <div key={timestamp}>
                    <WorkoutBar timestamp={timestamp} sets={sets} total_reps={total_reps}/>
                </div>
            )});
        return(
            <div className={styles.basic}>
                <Head>
                    <title>Weight Workouts - by Colin FitzGerald</title>
                    <meta></meta>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200&display=swap" rel="stylesheet"></link>
                </Head>
                <MenuBar account_id={this.props.account_id} onLogOut={this.props.onLogOut}/>
                {workoutBarDivs}
            </div>
        )} else {
            return (            <div className={styles.basic}>
                <Head>
                    <title>Weight Workouts - by Colin FitzGerald</title>
                    <meta></meta>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200&display=swap" rel="stylesheet"></link>
                </Head>
                <MenuBar account_id={this.props.account_id} onLogOut={this.props.onLogOut}/>
                <div className={styles.noWorkouts}>
                    No workouts yet! Use the menu to log a workout
                </div>
            </div>)
        }
    }
}

export default MenuPage