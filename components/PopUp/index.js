import react from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./styles.module.css"

class Popup extends react.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className={styles.basic}>
                <Link href="/">
                <div className={styles.action}>
                    Main
                    </div>
                </Link>
                <Link href="/logWorkout">
                <div className={styles.action}>
                    Log Workout
                </div>
                </Link>
                <Link href="/profile">
                <div className={styles.action}>
                    Profile
                </div>
                </Link>
            </div>
        )
    }
}

export default Popup