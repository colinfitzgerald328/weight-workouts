import react from "react";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./styles.module.css"

class MenuBar extends react.Component {
    constructor(props) {
        super(props)
        this.state={"showPopUp": false}
    }
    render() {
        console.log(this.state.showPopUp)
        return(
            <div className={styles.basic}>
                <div onClick={()=> console.log("clicked")} className={styles.text}>
                    Main Menu 
                </div>
                <div onClick={()=> console.log("clicked")} className={styles.icon}>
                    <MenuIcon onClick={console.log("clicked")}/>
                </div>
            </div>
        )
    }
}

export default MenuBar