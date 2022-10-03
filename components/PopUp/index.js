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
                <Link href="/menu">
                <div className={styles.action}>
                    Back to main menu
                    </div>
                </Link>
                <li className={styles.action}>
                    Log Workout
                </li>
            </div>
        )
    }
}

export default Popup