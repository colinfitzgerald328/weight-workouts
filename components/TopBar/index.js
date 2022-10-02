import react from "react";
import styles from "./styles.module.css"

class TopBar extends react.Component {
    render() {
        return(
            <div className={styles.basic}>
                Weight Workout
            </div>
        )
    }
}

export default TopBar