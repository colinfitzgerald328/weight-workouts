import react from 'react';
import LogWorkoutPopup from '../LogWorkoutPopup';
import 'reactjs-popup/dist/index.css';
import styles from "./styles.module.css"

class CustomMenuBar extends react.Component {
    constructor(props) {
        super(props)
        this.state = {"showPopUp": false, numClicks: 0}
    }


    render() {
        return (
            <div>
                <div className={styles.basic}>
                    <div className={styles.text}>
                        Log Workout
                    </div>
                    <div className={styles.alignRight}>
                        <LogWorkoutPopup/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomMenuBar