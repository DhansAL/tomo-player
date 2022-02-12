import { Alert, Button, Form } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";
import { SignupUser } from "../../../apiEvents/auth/signup";
import { AuthInputFiled } from "../AuthInputFiled";

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
  const handleClose = () => {
    setAlert(false);
    setResMessage(null)
  }
  return (
    <div class="w-25">
      {alert() ? (
        <Alert
          variant="warning"
          dismissible
          transition
          onClose={handleClose}
        >
          <p>{resMessage()}</p>
        </Alert>
      ) : null}


      <AuthInputFiled
        userSetter={setUsername}
        passwordSetter={setPassword}
      />

      <br />
      <Button onClick={handleSignup} variant="success" type="submit">
        Signup
      </Button>
    </div>
  );
};
