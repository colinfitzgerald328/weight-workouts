import {Collapse, Text, Button} from "@nextui-org/react";
import {Link} from 'react-router-dom'
import styles from "./styles.module.css"
import Moment from "react-moment";

export default function WorkoutBar(props) {
    const hrefLink = "/workoutPage?timestamp=" + props.timestamp;
    const formattedDate = <Moment format={"MM/DD/YYYY"} date={props.timestamp * 1000}/>;
    return (
        <Collapse.Group css={{background: "white", margin: "15px"}} bordered>
            <Collapse title="Weight Workout" subtitle={formattedDate}>
                <Text>
                    Sets: {props.sets}
                </Text>
                <Text css={{marginBottom: "10px"}}>
                    Total Reps: {props.total_reps}
                </Text>
                <Link to={hrefLink}>
                    <Button className={styles.button}
                            color="gradient">View
                        Details</Button>
                </Link>
            </Collapse>
        </Collapse.Group>
    );

}

