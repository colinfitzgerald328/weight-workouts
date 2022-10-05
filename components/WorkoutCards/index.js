import react from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from "./styles.module.css"

class WorkoutCards extends react.Component {
    render() {
        return(
        <div className={styles.global}>
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.title}>
                    Hang Clean 
                </div>
                <div className={styles.title1}>
                    <CheckCircleIcon/>
                </div> 
            </div>
            <div className={styles.flexContainer}>
                <div className={styles.weightLbs}>
                    110lbs
                </div>
                <div className={styles.weightLbs1}>
                    40 sets
                </div>
                <div className={styles.weightLbs2}>
                    10 reps
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default WorkoutCards