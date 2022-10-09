import Head from "next/head";
import Link from "next/link";
import react from "react";
import CustomMenuBar from "../components/CustomMenuBar";
import WorkoutBar from "../components/WorkoutBar";
import styles from "./styles.module.css"
import { useRouter } from 'next/router'


class LogWorkoutPage extends react.Component {
    constructor(props) {
        super(props)
        this.state={numItems: 1, items: {}}
        this.increase = this.increase.bind(this); 
        this.decrease = this.decrease.bind(this)

    }

    increase() {
        this.setState({
          numItems: this.state.numItems+1})
    }

    decrease() {
        if (this.state.numItems > 0) {
        this.setState({
          numItems: this.state.numItems-1})
    } else {
        this.setState({numItems: 0})
    }}





    render() {
        if (this.state.numItems > 0) {
            var submit = <div className={styles.submit} onClick={()=> console.log(items.length)}>Submit</div>
        } else {
            var submit = <div></div>
        }
        var items = []
        for (let i = 0; i < this.state.numItems; i++) {
            items.push(
            <div className={styles.global}>
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <input className={styles.title} type="text" placeholder="Exercise name" name="name" password={this.state.value} onChange={this.getPassword}/>
                    </div>
                    <div className={styles.flexContainer1}>
                        Weight<input className={styles.weightLbs} placeholder="Weight" type="text" name="name" password={this.state.value} onChange={this.getPassword}/>
                        Reps<input className={styles.weightLbs} placeholder="Reps" type="text" name="name" password={this.state.value} onChange={this.getPassword}/>
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
                <div className={styles.submit} onClick={()=> console.log(items.length)}>Submit</div>
            </div>
        )
    }
}

export default LogWorkoutPage