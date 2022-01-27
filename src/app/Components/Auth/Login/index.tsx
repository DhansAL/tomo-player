import axios from "axios";
import { Button, Form } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";

export const Login = () => {
    const [username, setUsername] = createSignal(null)
    const [password, setPassword] = createSignal(null)


    const handleSubmit = () => {
        //send username and password to /api/signin
        // console.log(username(), password());

        axios.post("http://localhost:4000/api/signin", {
            username: "dokaEnters",
            password: "111111"
        }).then((response) => {
            console.log(response);

        }).catch(function (error) {
            // handle error
            console.log(error.response.data);
        })

    }


    return <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control value={username()} onchange={(e) => setUsername(e.currentTarget.value)} type="text" placeholder="Enter username" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onchange={(e) => setPassword(e.currentTarget.value)} placeholder="Password" />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Form>
    </div >;
};
