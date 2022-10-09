import react from "react";
import Link from "next/link";
import Moment from 'react-moment';
import styles from "./styles.module.css"

class WorkoutBar extends react.Component {
    render() {
        return(
    <Link href={{
        pathname: '/workoutPage', query: "timestamp=" + this.props.timestamp
        }}>
        <div onClick={()=> console.log(this.props.timestamp)}className={styles.container}>
            <div className={styles.left}>
                <div className={styles.textContainer}>
                    <div className={styles.title1}>
                        Weight Workout
                    </div>
                    <div className={styles.title2}>
                        <Moment format="MMMM Do YYYY">{this.props.timestamp * 1000}</Moment>
                    </div>
                </div>
                <div className={styles.flexContainer}>
                        <div className={styles.weightLbs}>
                            Focus: Legs 
                        </div>
                        <div className={styles.weightLbs}>
                            Sets: {this.props.sets}
                        </div>
                        <div className={styles.weightLbs}>
                            Total Reps: {this.props.total_reps}
                        </div>
                    </div>
            </div>
        </div>
        </Link>
        )
    }
}

export default WorkoutBar