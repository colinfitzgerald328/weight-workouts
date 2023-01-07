import react from "react";
import Moment from "react-moment";
import styles from "./styles.module.css"
import {Loading} from "@nextui-org/react";
import UserCard from "./profileCard";

class UserProfile extends react.Component {
    constructor(props) {
        super(props)
        this.state = {profile: "", workout_length_object: "", workout_history: "", loading: true}
    }

    componentDidMount() {
        setTimeout(this.getProfile.bind(this), 500)
        this.getWorkoutHistory.bind(this)()
        this.setState({loading: false})
    }

    getProfile() {

        const xhr = new XMLHttpRequest();
        const self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = JSON.parse(xhr.responseText);
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

        const xhr = new XMLHttpRequest();
        const self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = JSON.parse(xhr.responseText);
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
        let a;
        if (this.state.workout_length_object) {
            a = <Moment format="MM/DD/YY">{this.state.workout_length_object["TIMESTAMP"] * 1000}</Moment>;
        } else {
            a = "No workouts yet";
        }

        if (this.state.profile.length == 0) {
            return(
                <div className={styles.loadingSpinner}>
                    <Loading/>
                </div>
            )
        } else {
                 return (
            <div className={styles.container}>
                <UserCard name={this.state.profile.name} image={this.state.profile.image_url}
                          city={this.state.profile.city} lastWorkoutDate={a}
                          workouts={this.state.workout_history.length}/>
            </div>
        )
        }
    }
}

export default UserProfile