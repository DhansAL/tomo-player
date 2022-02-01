import { Alert, Button, Form } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";
import { SignupUser } from "../../../apiEvents/auth/signup";

export const Signup = () => {
  const [alert, setAlert] = createSignal(false);
  const [username, setUsername] = createSignal(null);
  const [password, setPassword] = createSignal(null);
  const [resMessage, setResMessage] = createSignal(null);

  createEffect(() => {
    if (resMessage() != null) {
      setAlert(true);
    }
  });
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
          {alert() ? (
            <Alert
              variant="warning"
              dismissible
              transition
              onClose={() => setAlert(false)}
            >
              <p>{resMessage()}</p>
            </Alert>
          ) : null}
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
        <span class="text-info" className="text-muted">
          password should be atleast 6 character long
        </span>
        <br />
        <br />
        <Button onClick={handleSignup} variant="success" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
};
