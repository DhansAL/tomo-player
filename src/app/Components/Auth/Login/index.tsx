import axios from "axios";
import { Button, Form } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";

export const Login = () => {
    const [username, setUsername] = createSignal(null)
    const [password, setPassword] = createSignal(null)
    const [res, setRes] = createSignal(null)


    const handleSubmit = () => {
        //send username and password to /api/signin
        // console.log(username(), password());

        axios.post("http://localhost:4000/api/signin", {
            username: username(),
            password: password()
        }).then((response) => {
            setRes("signup successfull!")
            console.log(response.data);


        }).catch(function (error) {
            // handle error
            console.log(error.response);
            setRes(error.response.data?.error || error.response.data?.message);
        })

    }


    return <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control value={username()} onchange={(e) => setUsername(e.currentTarget.value)} type="text" placeholder="Enter username" />
                <Form.Text className="text-muted">
                    set a unique username
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onchange={(e) => setPassword(e.currentTarget.value)} placeholder="Password" />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            <hr />
            <Form.Text className="text-danger">
                {res()}
            </Form.Text>
        </Form>
    </div >;
};
