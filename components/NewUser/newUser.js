import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import {Mail} from "./mail";
import {Password} from "./password";

export default function NewUserModal(props) {
  const [visible, setVisible] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const handler = () => setVisible(true);


  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  function handleSubmit() {
        // listen for `load` event
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = JSON.parse(xhr.responseText);
                setData(data)
                console.log(data)
            }
        }

        // create a JSON object
        const json = {
            "username": username,
            "password": password,
        };

        // open request
        xhr.open('POST', 'https://winter-cogency-367402.uc.r.appspot.com/addUser');

        // set `Content-Type` header
        xhr.setRequestHeader('Content-Type', 'application/json');

        // send request with JSON payload
        xhr.send(JSON.stringify(json));
        setVisible(false)
    }

  return (
    <div>
      <Button auto onClick={handler}>
        New Profile
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              Weight Workouts
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            contentLeft={<Mail fill="currentColor" />}
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<Password fill="currentColor" />}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={handleSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
