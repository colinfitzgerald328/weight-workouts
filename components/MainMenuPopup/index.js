import react from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./styles.module.css"

class Popup extends react.Component {
    constructor(props) {
        super(props)
    }

    logOut() {
        window.localStorage.clear();
        console.log(localStorage)
    }


    render() {
        return (
            <div className={styles.basic}>
                <Link href={{
                    pathname: '/', query: this.props.data
                }}>
                    <div className={styles.action}>
                        Main
                    </div>
                </Link>
                <Link href={{
                    pathname: '/logWorkout',
                }}>
                    <div className={styles.action1}>
                        Log Workout
                    </div>
                </Link>
                <Link href={{
                    pathname: '/profile',
                }}>
                    <div className={styles.action2}>
                        Profile
                    </div>
                </Link>
                <div className={styles.action3}>
                    Log Out
                </div>
            </div>
        )
    }
}

export default Popup