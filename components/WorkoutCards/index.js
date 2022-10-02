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
                    <div className={styles.actualType}>
                        110
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default WorkoutCards