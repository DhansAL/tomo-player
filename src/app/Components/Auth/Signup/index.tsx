import { Alert, Button, Spinner } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";
import { SignupUser } from "../../../apiEvents/auth/signup";
import { AuthAlerts } from "../AuthAlerts";
import { AuthInputFiled } from "../AuthInputFiled";

export const Signup = () => {
  const [username, setUsername] = createSignal(null);
  const [password, setPassword] = createSignal(null);
  const [resMessage, setResMessage] = createSignal(null);
  const [isLoading, setIsLoading] = createSignal(false);



  const handleSignup = async () => {
    setIsLoading(true)
    const res = await SignupUser(username(), password());
    setResMessage(res);
    setIsLoading(false)
    setUsername(null);
    setPassword(null);
  };

  return (
    <div class="w-25">

      {resMessage() !== null ? (
        <AuthAlerts
          resMessage={resMessage()}
          cleanMesg={setResMessage(null)}
        />
      ) : null}

      <AuthInputFiled
        user={username()}
        password={password()}
        userSetter={setUsername}
        passwordSetter={setPassword}
      />

      <br />
      <Button onClick={handleSignup} variant="success" type="submit">
        {isLoading() ? <Spinner size="sm" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner> : "Signup"}
      </Button>
    </div>
  );
};
