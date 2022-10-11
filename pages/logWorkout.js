import Head from "next/head";
import Link from "next/link";
import react from "react";
import { Pane, InlineAlert, toaster} from "evergreen-ui";
import CustomMenuBar from "../components/CustomMenuBar";
import WorkoutBar from "../components/WorkoutBar";
import styles from "./styles.module.css"; 


class LogWorkoutPage extends react.Component {
    constructor(props) {
        super(props)
        this.state={numItems: 1, items: {}, exercise_details: [], exercise_name: null, weight: null, reps: null, type: "", length: ""}
        this.increase = this.increase.bind(this); 
        this.decrease = this.decrease.bind(this);
        this.getExerciseName = this.getExerciseName.bind(this);
        this.getWeight = this.getWeight.bind(this);
        this.getReps = this.getReps.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getLength = this.getLength.bind(this);
        this.getType = this.getType.bind(this);
    }

    increase() {
        if (this.state.exercise_name && this.state.weight && this.state.reps) {
        this.state.exercise_details.push({"account_id": localStorage.getItem("accountId"), "exercise_type": this.state.exercise_name, "weight": this.state.weight, "reps": this.state.reps})
        this.setState({numItems: this.state.numItems + 1})
        this.setState({exercise_name: null, weight: null, reps: null})}
        else {toaster.danger('Please complete each card before adding another')
        }
    }

    decrease() {
        if (this.state.numItems > 1) {
        this.setState({
          numItems: this.state.numItems-1})
        this.state.exercise_details.splice(-1)
    } else {
        this.setState({numItems: 1, exercise_details: [], exercise_name: null, weight: null, reps: null})
    }}

    getExerciseName(event) {
        this.setState({exercise_name: event.target.value})
    }

    getWeight(event) {
        this.setState({weight: event.target.value})
    }

    getReps(event) {
        this.setState({reps: event.target.value})
    }

    getLength(event) {
        this.setState({length: event.target.value})
    }

    getType(event) {
        this.setState({type: event.target.value})
    }

    handleSubmit() {
        this.state.exercise_details.push({"account_id": localStorage.getItem("accountId"), "exercise_type": this.state.exercise_name, "weight": this.state.weight, "reps": this.state.reps})
        console.log(this.state.exercise_details)
        console.log(this.state)
        // listen for `load` event
        var xhr = new XMLHttpRequest();
        var self = this
        xhr.onreadystatechange = function() { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                self.setState({data: data})
            }
        }   

        // create a JSON object */ 
        const json = {
            "account_id": localStorage.getItem("accountId"),
            "exercise_type": this.state.type, 
            "length": this.state.length,
            "exercise_details": this.state.exercise_details, 
        };

        console.log(json)

        // open request

        xhr.open('POST', 'https://weight-workouts.uc.r.appspot.com/logWorkout');

        // set `Content-Type` header
        xhr.setRequestHeader('Content-Type', 'application/json');

        // send rquest with JSON payload
        xhr.send(JSON.stringify(json));
        toaster.success('Workout Submitted')
    }




    render() {
        console.log(this.state)
        var items = []
        for (let i = 0; i < this.state.numItems; i++) {
            items.push(
            <div className={styles.global}>
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <input className={styles.title} type="text" placeholder="Exercise name" name="name" value={this.state.value} onChange={this.getExerciseName}/>
                    </div>
                    <div className={styles.flexContainer1}>
                        Weight<input className={styles.weightLbs} placeholder="Weight" type="text" name="name" value={this.state.value} onChange={this.getWeight}/>
                        Reps<input className={styles.weightLbs} placeholder="Reps" type="text" name="name" value={this.state.value} onChange={this.getReps}/>
                    </div>
                </div>
                </div>)}
        return(
            <div className={styles.basic}>
                <Head>
                    <title>Weight Workouts - by Colin FitzGerald</title>
                    <meta></meta>
                </Head>
                <CustomMenuBar/>
                <input type="text" className={styles.select} placeholder="length (minutes)" value={this.state.value} onChange={this.getLength}/>
                <input type="text" className={styles.select} placeholder="type of workout" value={this.state.value} onChange={this.getType}/>
                <div className={styles.flexContainer}>
                    <div className={styles.plus} onClick={this.increase}>
                        Add
                    </div>
                    <div className={styles.minus} onClick={this.decrease}>
                        Remove
                    </div>
                </div>
                <div className={styles.scroller}>
                    {items}
                </div>
                <div className={styles.submit} onClick={this.handleSubmit}>Submit</div>
            </div>
        )
    }
}

export default LogWorkoutPage