import { Button, Form } from "solid-bootstrap";

export const Signup = () => {
    return <div class="w-25">
        <Form>
            <Form.Group className="mb-2">
                <Form.Label>enter username</Form.Label>

                <Form.Control type="text" placeholder="username" />
                <span class="text-info" className="text-muted">
                    choose a unique username
                </span>
            </Form.Group>

            <Form.Control type="password" placeholder="password" />

            <Button variant="success" type="submit">Login</Button>
        </Form>
    </div>;
};
