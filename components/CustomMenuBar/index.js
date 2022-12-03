import MenuIcon from '@mui/icons-material/Menu';
import react from 'react';
import LogWorkoutPopup from '../LogWorkoutPopup';
import 'reactjs-popup/dist/index.css';
import styles from "./styles.module.css"

class CustomMenuBar extends react.Component {
    constructor(props) {
        super(props)
        this.state = {"showPopUp": false, numClicks: 0}
    }

    showPopUp() {
        if (this.state.numClicks == 0) {
            this.setState({"showPopUp": true})
            this.state.numClicks += 1
            console.log(this.state.numClicks)
        } else {
            this.setState({"showPopUp": false})
            this.state.numClicks -= 1
            console.log(this.state.numClicks)
        }
    }

    render() {
        let popUp;
        if (this.state.numClicks == 1) {
            popUp = <LogWorkoutPopup onLogOut={this.props.onLogOut}/>;
        } else {
            popUp = (<div></div>);
        }
        return (
            <div>
                <div onClick={() => console.log(this.props)} className={styles.basic}>
                    <div className={styles.text}>
                        Log Workout
                    </div>
                    <div onClick={() => this.showPopUp()} className={styles.icon}>
                        <MenuIcon/>
                    </div>
                </div>
                {popUp}
            </div>
        )
    }
}

export default CustomMenuBar