import { Button } from "solid-bootstrap";
import { logoutUser } from "../apiEvents/auth/login";

export const UserStatsOnline = () => {

    const handlelogout = () => {
        logoutUser();
    };

    return (
        <>
            <div class="p-3 bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}>
                <div className="d-flex justify-content-between w-100">
                    <Button variant="secondary">
                        <a class="text-decoration-none text-light" href="#">
                            back to overview
                        </a>
                    </Button>
                    <Button href="#login" onClick={handlelogout} variant="danger"> logout?</Button>
                </div>
                <h2 className="m-6 text-light">USER STATS page</h2>

            </div>
        </>
    );
};
