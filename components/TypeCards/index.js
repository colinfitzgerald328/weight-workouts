import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

export default function TypeCards(props) {
  return (
      <Grid>
        <Card>
          <Card.Header>
            <Text b>Workout Type & Length</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text size={35}>
              {props.type}
            </Text>
            <Text size={35}>
              {props.length} minutes
            </Text>
          </Card.Body>
          <Card.Divider />
        </Card>
      </Grid>
  );
}