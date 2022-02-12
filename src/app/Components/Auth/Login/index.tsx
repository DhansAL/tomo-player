import { Alert, Button, Form } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";
import { authStore } from "../../../store/auth";
import { loginUser, logoutUser } from "../../../apiEvents/auth/login";
import { AuthInputFiled } from "../AuthInputFiled";

export const Login = () => {
  const [username, setUsername] = createSignal(null);
  const [password, setPassword] = createSignal(null);
  const [auth, setAuth] = createSignal(authStore().authenticate);
  const [resMessage, setResMessage] = createSignal(authStore().message);

  //set a common alert component
  const [alert, setAlert] = createSignal(false);

  createEffect(() => {
    if (resMessage() != "") {
      setAlert(true);
      console.log(resMessage());

    }
  });

  createEffect(() => {
    setAuth(authStore().authenticate);
    setResMessage(authStore().message);
  });

  const handleLogin = () => {
    loginUser(username(), password());
    setUsername(null);
    setPassword(null);
  };

  const handlelogout = () => {
    logoutUser();
  };

  return (
    <>
      <div class="w-25">
        {/* fix alert show only when message is there maybe onclose set messsage setAlert to blank  = null */}
        {auth() ? (
          <>
            <div className="m-3">
              <p className="text-info">signed in as {localStorage.getItem("user")}</p>
              <Button variant="danger" onClick={handlelogout}>
                logout
              </Button>
            </div>
          </>
        ) : (<>
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
          <AuthInputFiled
            userSetter={setUsername}
            passwordSetter={setPassword}
          />
          <br />
          <Button variant="success" onClick={handleLogin}>
            login
          </Button>
        </>

        )}
      </div>
    </>
  );
};
