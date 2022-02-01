
import { Button } from "solid-bootstrap";
import { LoginMain } from "../Components/LoginPage";

export const LoginPage = () => {


    return (
        <>
            <div class="bg-dark vw-100 vh-100 p-4" style={{ overflow: "hidden" }}>
                {/* seperate page for login? */}
                <Button variant="secondary">
                    <a class="text-decoration-none text-light" href="#">
                        back to overview
                    </a>
                </Button>
                <LoginMain />
            </div>
        </>
    );
};
