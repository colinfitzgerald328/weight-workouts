import { ThreeSixty } from "@mui/icons-material";
import react from "react";
import Moment from "react-moment";
import { CloudinaryContext } from "cloudinary-react";
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
                    self.setState({profile: "no profile yet"})
                } else {
                    self.setState({profile: data["user_profile"][0]})
                }
            }
        }


        const theUrl = "https://winter-cogency-367402.uc.r.appspot.com/getUserProfile?account_id=" + localStorage.getItem("accountId")

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
                    self.setState({workout_length_object: 0})
                } else {
                    self.setState({workout_history: data["feed"], workout_length_object: data["feed"][0]})
                }
            }
        }


        const theUrl = "https://winter-cogency-367402.uc.r.appspot.com/getFeed?account_id=" + localStorage.getItem("accountId")

        xhr.open("GET", theUrl, true); // true for asynchronous 
        xhr.send(null);
    }
    render() {
        if (this.state.workout_length_object) {
            var a = <Moment format="MM/DD/YY">{this.state.workout_length_object["TIMESTAMP"] * 1000}</Moment>}
            else {
                var a = "No workouts yet"
            }
        
        return(
            <div className={styles.container}>
                    <div className={styles.leftImage}>
                        <img className={styles.special} src={this.state.profile.image_url}/>
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.item}>
                            Name: {this.state.profile.name} 
                        </div>
                        <div className={styles.item}>
                            City: {this.state.profile.city}   
                        </div>
                        <div className={styles.item}>
                            Last Workout Date: {a}
                        </div>
                        <div className={styles.item}>
                            Total Workouts This Year: {this.state.workout_history.length}
                        </div>
                        </div>
                    </div>
        )
    }
}

export default UserProfile