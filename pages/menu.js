import Head from "next/head";
import react from "react";
import MenuBar from "../components/MenuBar";
import WorkoutBar from "../components/WorkoutBar";
import LoadingSpinner from "./loading/loading";
import styles from "./styles.module.css"


class MenuPage extends react.Component {
    constructor(props) {
        super(props)
        this.state = {data: [], noWorkoutsYet: false}
    }

    componentDidMount() {
        this.getFeed.bind(this)()
    }

    getFeed() {

        const xhr = new XMLHttpRequest();
        const self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = JSON.parse(xhr.responseText);
                if (data["operation"] == "error") {
                    self.setState(({noWorkoutsYet: true}))
                } else {
                    self.setState({data: data["feed"]})
                }
            }
        }


        const theUrl = "https://winter-cogency-367402.uc.r.appspot.com/getFeed?account_id=" + localStorage.getItem("accountId")

        xhr.open("GET", theUrl, true); // true for asynchronous 
        xhr.send(null);
    }

    render() {
        if (!this.state.noWorkoutsYet) {
            const workoutBarDivs = this.state.data.map(data => {
                const timestamp = data["TIMESTAMP"];
                const sets = data["sets"];
                const total_reps = data["total_reps"];
                return (
                    <div key={timestamp}>
                        <WorkoutBar timestamp={timestamp} sets={sets} total_reps={total_reps}/>
                    </div>
                )
            });
            return (
                <div className={styles.basic}>
                    <Head>
                        <title>Weight Workouts - by Colin FitzGerald</title>
                        <meta></meta>
                        <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200&display=swap"
                              rel="stylesheet"></link>
                    </Head>
                    <MenuBar account_id={this.props.account_id} onLogOut={this.props.onLogOut}/>
                    {workoutBarDivs}
                </div>
            )
        } else if (!this.state.noWorkoutsYet && this.state.data.length == 0) {
            return (<LoadingSpinner></LoadingSpinner>)
        } else {
            return (<div className={styles.basic}>
                <Head>
                    <title>Weight Workouts - by Colin FitzGerald</title>
                    <meta></meta>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200&display=swap"
                          rel="stylesheet"></link>
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