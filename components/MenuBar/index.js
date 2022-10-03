import MenuIcon from '@mui/icons-material/Menu';
import react from 'react';
import Popup from '../PopUp';
import 'reactjs-popup/dist/index.css';
import { Button, Popover, Menu, Item, Position} from 'evergreen-ui';
import styles from "./styles.module.css"

class MenuBar extends react.Component {
    constructor(props) {
        super(props)
        this.state={"showPopUp": false}
        this.hidePopUp = this.hidePopUp.bind(this)
    }

    hidePopUp() {
        this.setState({"showPopUp": false})
    }
    render() {
      if (this.state.showPopUp) {
        var popUp = <Popup onClose={this.hidePopUp.bind(this)}/>
    } else {
        var popUp = (<div></div>)
    }
    console.log(this.state.showPopUp)
      return(
          <div>
          <div className={styles.basic}>
              <div className={styles.text}>
                  Main Menu 
              </div>
              <div onClick={()=> this.setState({"showPopUp": true})} className={styles.icon}>
                  <MenuIcon/>
              </div>
          </div>
                          {popUp}
                          </div>
          )
    }
}

export default MenuBar