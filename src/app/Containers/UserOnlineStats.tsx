import { Button } from "solid-bootstrap";
import { logoutUser } from "../apiEvents/auth/login";

export const UserStatsOnline = () => {

    const handlelogout = () => {
        logoutUser();
    };

    return (
        <>
            <div class=" p-5 bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}>
                <Button href="#login" onClick={handlelogout} variant="danger"> logout?</Button>
                {/* seperate page for login? */}
                <Button variant="secondary">
                    <a class="text-decoration-none text-light" href="#">
                        back to overview
                    </a>
                </Button>
                <h2 className="m-6 text-light">USER STATS page</h2>
                <div>
                    <p class="text-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odio, nisi vero quos maiores voluptatum, dolores ea quam doloremque dolore similique perspiciatis sed officiis, ipsum numquam fuga corporis. Cum molestiae non cupiditate minima tempore voluptatem quae dolor, nisi laboriosam aliquam ducimus ut praesentium delectus, provident incidunt illum nulla rem officiis. A animi quis offieniet possimus quaerat, quidem voluptatibus aliquid? Explicabo, dolorum incidunt! Cum quaerat voluptates culpa, nesciunt, molestias tempora dolor delectus soluta dolorem atque sapiente! Vel eum maxime repudiandae fugit perspiciatis officia hic officiis libero totam, porro impedit doloremque reprehenderit quam commodi est sapiente. Nulla voluptates vel veritatis, vero quasi voluptatum a accusantium recusandae, possimus corporis cupiditate optio nostrum ipsam odit tenetur aut reprehenderit dolor ex. Ullam consequuntur, omnis nihil sunt iste ab excepturi ipsum nulla, facilis quo quas qui? Pariatur rem, ut est placeat ipsa aliquid consequuntur culpa eligendi aspernatur dolore corporis? Tenetur, pariatur, consequuntur necessitatibus minus, nisi aut eos quaerat fugiat error odio molestiae perspiciatis at nesciunt libero. Reiciendis in eveniet et, quam eum reprehenderit incidunt dolorem officiis non?</p>
                </div>
            </div>
        </>
    );
};
