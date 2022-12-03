import MenuIcon from '@mui/icons-material/Menu';
import react from 'react';
import ProfilePopup from '../ProfilePopup';
import 'reactjs-popup/dist/index.css';
import styles from "./styles.module.css"

class ProfileMenuBar extends react.Component {
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
            popUp = <ProfilePopup/>;
        } else {
            popUp = (<div></div>);
        }
        return (
            <div>
                <div className={styles.basic}>
                    <div className={styles.text}>
                        Profile
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

export default ProfileMenuBar