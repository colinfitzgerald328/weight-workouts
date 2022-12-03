import MenuIcon from '@mui/icons-material/Menu';
import react from 'react';
import WorkoutPagePopup from '../WorkoutPagePopup';
import 'reactjs-popup/dist/index.css';
import styles from "./styles.module.css"

class WorkoutMenuBar extends react.Component {

    render() {
        return (
            <div>
                <div onClick={() => console.log(this.props)} className={styles.basic}>
                    <div className={styles.text}>
                        Workout Details
                    </div>
                    <div className={styles.alignRight}>
                        <WorkoutPagePopup/>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkoutMenuBar