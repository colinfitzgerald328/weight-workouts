import react from "react";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./styles.module.css"

class Popup extends react.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div onClick={this.props.onClose}className={styles.basic}>
                Back to main
            </div>
        )
    }
}

export default Popup