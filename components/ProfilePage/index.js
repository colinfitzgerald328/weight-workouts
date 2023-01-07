import React from "react";
import {Modal, Button, Text, Input, Row, Checkbox} from "@nextui-org/react";
import {toaster} from "evergreen-ui";
import styles from "./styles.module.css";
import UserProfile from "../UserProfile";

export default function Profile(props) {
    const [visible, setVisible] = React.useState(false);
    const [image, setImage] = React.useState(null);
    const [url, setUrl] = React.useState("");
    const [name, setName] = React.useState("");
    const [city, setCity] = React.useState("");
    const [data, setData] = React.useState([]);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
    };

    function uploadImage() {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "kvc17geu")
        data.append("cloud_name", "dbq7j2qmy")
        fetch("https://api.cloudinary.com/v1_1/dbq7j2qmy/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => console.log(err))
        console.log("this function was run ")
    }

    function handleSubmit() {
        // listen for `load` event
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const data = JSON.parse(xhr.responseText);
                setData(data)
            }
        }

        // create a JSON object
        const json = {
            "account_id": localStorage.getItem("accountId"),
            "name": name,
            "city": city,
            "image_url": String(url)
        };

        // open request
        xhr.open('POST', 'https://winter-cogency-367402.uc.r.appspot.com/updateUserProfile');

        // set `Content-Type` header
        xhr.setRequestHeader('Content-Type', 'application/json');

        // send request with JSON payload
        xhr.send(JSON.stringify(json));
    }


    return (
        <div className={styles.container}>
            <Button auto shadow onClick={handler}>
                Update Profile
            </Button>
            <Modal css={{"width": "90%", "marginLeft": "auto", "marginRight": "auto"}}
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Update your profile here!
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Full Name"
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="City"
                        onChange={e => setCity(e.target.value)}
                    />
                    <input type="file" name="File Upload"
                           onChange={e => setImage(e.target.files[0])}/>
                    <Button auto flat color="success" onClick={uploadImage}>
                        Click to confirm image upload
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto onClick={handleSubmit}>
                        Update Profile
                    </Button>
                </Modal.Footer>
            </Modal>
            <UserProfile/>
        </div>
    );
}
