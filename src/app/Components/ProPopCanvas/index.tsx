import { Button, Offcanvas } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";
import { authStore } from "../../store/auth";

export const ProPopCanvas = () => {
    const [logged, setLogged] = createSignal(authStore().authenticate)
    createEffect(() => {
        setLogged(authStore().authenticate);
    });

    const [show, setShow] = createSignal(false);
    const handleOpen = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <div >

                {logged() ? <Button variant="info"
                    // this should be userinfo page not pro
                    href="#userstats">{localStorage.getItem('user')}</Button> : <Button variant="warning" onClick={handleOpen}>PRO</Button>}

                <Offcanvas className="bg-dark h-50" placement="bottom" show={show()} onHide={handleClose}>
                    <Offcanvas.Header >
                        <Offcanvas.Title> <h4 class="text-light"> UNLOCK NEW FEATURES</h4></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body >
                        <p class="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia ea ad ducimus illum officiis cumque? Maxime, in soluta harum recusandae, atque eaque repellat repudiandae voluptates ipsam deleniti laudantium commodi?</p>

                        <p class="text-light">track your progress and have fun with "BOT"</p>
                        <Button class=" w-100" variant="success">
                            <a class="text-decoration-none text-light" href="#pro">Have a look!</a>
                        </Button>
                        <p className="text-muted">have an account? <a class="text-info text-decoration-none" href="#login"> login</a></p>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
};
