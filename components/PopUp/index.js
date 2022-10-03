import react from "react";
import styles from "./styles.module.css"

class PopUp extends react.Component {
    render() {
        return(
            <div className={styles.basic}>
                <div className={styles.text}>
                    Main Menu 
                </div>
                <div className={styles.icon}>
                    <MenuIcon/>
                </div>
            </div>
        )
    }
}

export default PopUp