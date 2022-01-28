import { Button } from "solid-bootstrap";
import { Login } from "../Components/Auth/Login";
import { Signup } from "../Components/Auth/Signup";

export const ProPage = () => {
  return (
    <>
      <Button variant="muted">
        <a class="text-decoration-none text-light" href="#overview">
          back to overview
        </a>
      </Button>
      <div class="bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}>
        <h2 className="m-6 text-light">Pro page</h2>
        <h4 className="m-6 text-light">Login</h4>
        <Login />
        <h4 className="m-6 text-light">Signup</h4>
        <Signup />
      </div>
    </>
  );
};
