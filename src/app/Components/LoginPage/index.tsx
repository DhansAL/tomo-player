import { Login } from "../../Components/Auth/Login";
import { Signup } from "../../Components/Auth/Signup";
import { createEffect, createSignal } from "solid-js";
import { authStore } from "../../store/auth";


export const LoginMain = () => {
    // if auth is true , user can only logout if auth false so no need to show signup
    const [showSignup, setShowSignup] = createSignal(authStore().authenticate);
    createEffect(() => {
        setShowSignup(authStore().authenticate);
    });
    return <div class="d-flex flex-column align-items-center justify-content-around m-2 p-2 w-100">
        <h1 className="m-6 text-light">🍜 Tomoplayer ^_^</h1>
        <br />
        <h4 className="m-6 text-light">Login</h4>
        <br />
        <Login />
        {showSignup() ? null : (
            <>
                <h2 className="m-6 text-light">or</h2>
                <h4 className="m-6 text-light">Signup</h4>
                <Signup />
            </>
        )}
    </div>;
};
