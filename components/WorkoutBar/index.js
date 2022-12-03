import {Card, Grid, Text, Button, Row} from "@nextui-org/react";
import {Link, BrowserRouter} from 'react-router-dom'
import styles from "./styles.module.css"
import Moment from "react-moment";

export default function WorkoutBar(props) {
    const hrefLink = "/workoutPage?timestamp=" + props.timestamp;
    return (
        <Grid.Container>
            <Grid css={{w: "100vw", h: "30vh", margin: "20px"}}>
                <Card>
                    <Card.Header>
                        <Text b>Weight Workout</Text>
                    </Card.Header>
                    <Card.Divider/>
                    <Card.Body css={{py: "$10"}}>
                        <Text>
                            <Moment format={"MM/DD/YYYY"} date={props.timestamp * 1000}/>
                        </Text>
                        <Text>
                            Sets: {props.sets}
                        </Text>
                        <Text>
                            Total Reps: {props.total_reps}
                        </Text>
                    </Card.Body>
                    <Card.Divider/>
                    <Card.Footer>
                        <Row>
                            <Link to={hrefLink}>
                                <Button className={styles.shit} shadow
                                        color="gradient">View
                                    Details</Button>
                            </Link>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        </Grid.Container>
    );
}