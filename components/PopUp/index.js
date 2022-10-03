import react from "react";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./styles.module.css"

class Popup extends react.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div onClick={this.props.onClose} className={styles.basic}>
                <li className={styles.action}>
                    Back to main menu
                </li>
                <li className={styles.action}>
                    Log Workout
                </li>
            </div>
        )
    }
}

export default Popup