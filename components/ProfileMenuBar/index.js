import MenuIcon from '@mui/icons-material/Menu';
import react from 'react';
import ProfilePopup from '../ProfilePopup';
import 'reactjs-popup/dist/index.css';
import styles from "./styles.module.css"

class ProfileMenuBar extends react.Component {

    render() {
        return (
            <div>
                <div className={styles.basic}>
                    <div className={styles.text}>
                        Profile
                    </div>
                    <div className={styles.alignRight}>
                        <ProfilePopup/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileMenuBar