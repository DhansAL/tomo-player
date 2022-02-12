import { Button, Spinner } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";
import { loginUser, logoutUser } from "../../../apiEvents/auth/login";
import { authStore } from "../../../store/auth";
import { AuthAlerts } from "../AuthAlerts";
import { AuthInputFiled } from "../AuthInputFiled";

export const Login = () => {
  const [username, setUsername] = createSignal(null);
  const [password, setPassword] = createSignal(null);
  const [auth, setAuth] = createSignal(authStore().authenticate);
  const [resMessage, setResMessage] = createSignal(null);
  const [isLoading, setIsLoading] = createSignal(false);


  createEffect(() => {
    setAuth(authStore().authenticate);
  });


  const handleLogin = async () => {
    setIsLoading(true)
    const res = await loginUser(username(), password());
    setResMessage(res)
    setIsLoading(false)
    // console.log({
    //   username: username(),
    //   password: password()
    // });

    setUsername(null);
    setPassword(null);
  };

  const handlelogout = () => {
    logoutUser();
  };

  return (
    <>
      <div class="w-25">
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
          <Button variant="success" onClick={handleLogin}>
            {isLoading() ? <Spinner size="sm" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner> : "login"}
          </Button>
        </>

        )}
      </div>
    </>
  );
};
