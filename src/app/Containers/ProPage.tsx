import { Button } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";
import { Login } from "../Components/Auth/Login";
import { Signup } from "../Components/Auth/Signup";
import { authStore } from "../store/auth";

export const ProPage = () => {
  const [showSignup, setShowSignup] = createSignal(authStore().authenticate);
  createEffect(() => {
    setShowSignup(authStore().authenticate);
  });

  return (
    <>
      <div class="bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}>
        <Button variant="secondary">
          <a class="text-decoration-none text-light" href="#">
            back to overview
          </a>
        </Button>
        <h2 className="m-6 text-light">Pro page</h2>
        <h4 className="m-6 text-light">Login</h4>
        <Login />
        {showSignup() ? null : (
          <>
            <h3 className="m-6 text-light">or</h3>
            <h4 className="m-6 text-light">Signup</h4>
            <Signup />
          </>
        )}
      </div>
    </>
  );
};
