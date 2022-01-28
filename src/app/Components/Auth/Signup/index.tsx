import { Button, Form } from "solid-bootstrap";

export const Signup = () => {
    return <div class="sm">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control type="text" placeholder="username" />
                <p class="text-info" className="text-muted">
                    choose a unique username
                </p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="success" type="submit">Login</Button>
        </Form>
    </div>;
};
