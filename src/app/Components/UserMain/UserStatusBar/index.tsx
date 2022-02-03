import { Button } from "solid-bootstrap";
import { logoutUser } from "../../../apiEvents/auth/login";


export const UserStatusBar = () => {

    const handlelogout = () => {
        logoutUser();
    };
    return <>
        <div className="d-flex justify-content-between w-100">
            <Button variant="secondary">
                <a class="text-decoration-none text-light" href="#">
                    back to overview
                </a>
            </Button>
            <h3 className="text-warning">User Page</h3>
            <Button href="#login" onClick={handlelogout} variant="danger"> logout?</Button>
        </div>
    </>
};
