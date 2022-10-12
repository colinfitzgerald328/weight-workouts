import { ThreeSixty } from "@mui/icons-material";
import react from "react";
import Moment from "react-moment";
import styles from "./styles.module.css"

class UserProfile extends react.Component {
    constructor(props) {
        super(props)
        this.state={profile: "", workout_length_object: "", workout_history: ""}
    }

    componentDidMount() {
        this.getProfile.bind(this)()
        this.getWorkoutHistory.bind(this)()
    }

    getProfile() {

        var xhr = new XMLHttpRequest();
        var self = this
        xhr.onreadystatechange = function() { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                if (data["operation"] == "error") {
                    self.setState({profile: null})
                } else {
                    self.setState({profile: data["user_profile"][0]})
                }
            }
        }


        const theUrl = "https://weight-workouts.uc.r.appspot.com/getUserProfile?account_id=" + localStorage.getItem("accountId")

        xhr.open("GET", theUrl, true); // true for asynchronous 
        xhr.send(null);
    }

    getWorkoutHistory() {

        var xhr = new XMLHttpRequest();
        var self = this
        xhr.onreadystatechange = function() { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                if (data["operation"] == "error") {
                    self.setState({workout_history: null, workout_length_object: null})
                } else {
                    self.setState({workout_history: data["feed"], workout_length_object: data["feed"][0]})
                }
            }
        }


        const theUrl = "https://weight-workouts.uc.r.appspot.com/getFeed?account_id=" + localStorage.getItem("accountId")

        xhr.open("GET", theUrl, true); // true for asynchronous 
        xhr.send(null);
    }
    render() {
        if (this.state.profile !=null && this.state.workout_history !=null && this.state.workout_length_object !=null) {
        return(
            <div className={styles.container}>
                    <div className={styles.leftImage}>
                        <div className={styles.itemContainer}>
                        <div className={styles.item}>
                            {this.state.profile.name} 
                        </div>
                        <div className={styles.item}>
                            {this.state.profile.city}   
                        </div>
                        <div className={styles.item}>
                            Last Workout Date: <Moment format="MM/DD/YY">{this.state.workout_length_object["TIMESTAMP"] * 1000}</Moment>
                        </div>
                        <div className={styles.item}>
                            Total Workouts This Year: {this.state.workout_history.length}
                        </div>
                        </div>
                    </div>

            </div>
        )} else {
            return(<div>
                Use the button above to create your profile
            </div>)
        }
    }
}

export default UserProfile