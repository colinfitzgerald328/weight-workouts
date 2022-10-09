import MenuIcon from '@mui/icons-material/Menu';
import react from 'react';
import WorkoutPagePopup from '../WorkoutPagePopup';
import 'reactjs-popup/dist/index.css';
import styles from "./styles.module.css"

class WorkoutMenuBar extends react.Component {
    constructor(props) {
        super(props)
        this.state={"showPopUp": false, numClicks: 0}
    }

    showPopUp(){
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
      if (this.state.numClicks == 1) {
        var popUp = <WorkoutPagePopup data={this.props.data} onLogOut={this.props.onLogOut}/>
    } else {
        var popUp = (<div></div>)
    }
      return(
          <div>
          <div onClick={()=> console.log(this.props)} className={styles.basic}>
              <div className={styles.text}>
                  Workout Details
              </div>
              <div data={this.props.data} onClick={()=> this.showPopUp()} className={styles.icon}>
                  <MenuIcon/>
              </div>
          </div>
                          {popUp}
                          </div>
          )
    }
}

export default WorkoutMenuBar