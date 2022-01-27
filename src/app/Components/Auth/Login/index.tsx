import { Button, Form } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";

export const Login = () => {
    const [username, setUsername] = createSignal(null)
    const [assword, setPassword] = createSignal(null)
    const handleSubmit = () => {
        console.log("prevented");
    }

    return <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Form>
    </div >;
};
