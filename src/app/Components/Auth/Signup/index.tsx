import { Alert, Button, Form } from "solid-bootstrap";
import { createSignal } from "solid-js";
import { SignupUser } from "../../../apiEvents/auth/signup";

export const Signup = () => {
  const [username, setUsername] = createSignal(null);
  const [password, setPassword] = createSignal(null);
  const [resMessage, setResMessage] = createSignal(null);

  const handleSignup = async () => {
    const res = await SignupUser(username(), password());
    setResMessage(res);
    setUsername(null);
    setPassword(null);
  };
  return (
    <div class="w-25">
      <Form>
        <Form.Group className="mb-2">
          <Form.Label>enter username</Form.Label>
          <Alert variant="warning">{resMessage()}</Alert>
          <Form.Control
            type="text"
            value={username()}
            onchange={(e) => setUsername(e.currentTarget.value)}
            placeholder="username"
          />
          <span class="text-info" className="text-muted">
            choose a unique username
          </span>
        </Form.Group>

        <Form.Control
          type="password"
          value={password()}
          onchange={(e) => setPassword(e.currentTarget.value)}
          placeholder="password"
        />
        <br />
        <Button onClick={handleSignup} variant="success" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
};
