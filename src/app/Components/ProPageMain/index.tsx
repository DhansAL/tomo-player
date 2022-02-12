import { Button } from "solid-bootstrap";
import { proConfigs } from "../../../configs/Propage/proConfigs";
import { Signup } from "../../Components/Auth/Signup";
/**
 * 
 * Main propage component
 */
export const ProPageMain = () => {
    return <div>
        <div className="">
            <Button variant="secondary">
                <a class="text-decoration-none text-light" href="#">
                    back to overview
                </a>
            </Button>
        </div>
        <h2 className="m-6 text-light">STEP UP YOUR LEARNING JOURNEY BY BECOMING A PRO.</h2>
        <div>
            <h4 class="text-success">Unbox new features like CollectionSync and much more!</h4>
            <p class="text-light">{proConfigs.proDesc}</p>
        </div>
        <Signup />
        <p className="text-muted">have an account? <a class="text-info text-decoration-none" href="#login"> login</a></p>
    </div>;
};
