import react from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from "./styles.module.css"

class WorkoutCards extends react.Component {
    render() {
        return (
            <div className={styles.global}>
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>
                            {this.props.exercise_type}
                        </div>
                        <div className={styles.title1}>
                            <CheckCircleIcon/>
                        </div>
                    </div>
                    <div className={styles.flexContainer}>
                        <div className={styles.weightLbs}>
                            {this.props.weight} lbs
                        </div>
                        <div className={styles.weightLbs1}>
                        </div>
                        <div className={styles.weightLbs2}>
                            {this.props.reps} reps
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkoutCards