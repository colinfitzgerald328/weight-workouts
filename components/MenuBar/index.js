import react from 'react';
import MainMenuPopup from "../PopUp";
import 'reactjs-popup/dist/index.css';
import styles from "./styles.module.css"

class MenuBar extends react.Component {

    render() {
        return (
            <div>
                <div className={styles.basic}>
                    <div className={styles.text}>
                        Workout Home
                    </div>
                    <div className={styles.rightAlign}>
                        <MainMenuPopup onLogOut={this.props.onLogOut}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuBar