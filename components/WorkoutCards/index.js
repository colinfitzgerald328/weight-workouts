import react from "react";
import styles from "./styles.module.css"

class WorkoutCards extends react.Component {
    render() {
        return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.textContainer}>
                    <div className={styles.title}>
                        Hang Clean 
                    </div>
                </div>
                <div className={styles.flexContainer}>
                        <div className={styles.weightLbs}>
                            110lbs
                        </div>
                        <div className={styles.weightLbs}>
                            3 sets
                        </div>
                        <div className={styles.weightLbs}>
                            10 reps
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default WorkoutCards