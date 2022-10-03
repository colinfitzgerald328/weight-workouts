import react from "react";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./styles.module.css"

class MenuBar extends react.Component {
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

export default MenuBar