import react from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./styles.module.css"

class ProfilePopup extends react.Component {
    constructor(props) {
        super(props)
    }

    logOut() {
        window.localStorage.clear();
        console.log(localStorage)
    }


    render() {
        console.log(window.localStorage)
        return(
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
      query: this.props.data}}>
                <div className={styles.action2}>
                    Log Workout
                </div>
                </Link>
            </div>
        )
    }
}

export default ProfilePopup