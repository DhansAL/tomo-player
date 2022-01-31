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

                <Offcanvas className="bg-dark h-50 m-1 p-4" placement="bottom" show={show()} onHide={handleClose}>
                    <Offcanvas.Header >
                        <Offcanvas.Title> <h4 class="text-light"> UNLOCK PRO FEATURES </h4></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body class="m-2 p-2" >
                        <div className="d-flex flex-column justify-content-around">
                            <h4 class="text-light ">
                                Sign up and gain access to use collection sync and much more!
                            </h4>
                            <h6 class="text-light">Sign up for <span class="text-success">free!</span></h6>

                            <Button href="#pro" variant="success">
                                Know more
                            </Button>
                            <p className="m-2 text-muted ">Already registered?<a class="text-info text-decoration-none" href="#login"> login</a></p>
                        </div>

                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    )
};
