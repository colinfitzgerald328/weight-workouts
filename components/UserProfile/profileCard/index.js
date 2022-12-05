import {Card, User, Text} from "@nextui-org/react";

export default function App(props) {
    return (
        <Card>
            <Card.Body>
                <User
                    src={props.image}
                    name={props.name}
                >
                </User>
                <Text css={{marginLeft: "10px", marginTop: "10px"}}>
                    {props.city}
                </Text>
                <Text css={{marginLeft: "10px", marginTop: "10px"}}>
                    Last Workout Date: {props.lastWorkoutDate}
                </Text>
                <Text css={{marginLeft: "10px", marginTop: "10px"}}>
                    Workouts This Year: {props.workouts}
                </Text>
            </Card.Body>
        </Card>
    );
}