import react from "react";
import styles from "./styles.module.css"

class WorkoutBar extends react.Component {
    render() {
        return(
        <div className={styles.container}>
            <div onClick={()=> location.href="/"} className={styles.left}>
                <div className={styles.textContainer}>
                    <div className={styles.title1}>
                        Weight Workout
                    </div>
                    <div className={styles.title2}>
                        10/11/2022
                    </div>
                </div>
                <div className={styles.flexContainer}>
                        <div className={styles.weightLbs}>
                            Focus: Legs 
                        </div>
                        <div className={styles.weightLbs}>
                            40 sets
                        </div>
                        <div className={styles.weightLbs}>
                            200 reps
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default WorkoutBar