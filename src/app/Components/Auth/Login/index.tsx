import { Button, Form } from "solid-bootstrap";
import { createSignal } from "solid-js";
import Axios from "../../../utils/axios";
import { authStore } from "../../../store/auth";

export const Login = () => {
    const [username, setUsername] = createSignal(null)
    const [password, setPassword] = createSignal(null)
    const [res, setRes] = createSignal(null)

    const handleSubmit = async () => {
        //send username and password to /api/signin
        try {
            const res = await Axios.post("/signin", {
                username: username(),
                password: password()
            })
            if (res.status === 200) {
                setRes("signup successfull")
                const { token, user } = res.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", user.username)

                authStore.setState({ token: token, username: user.username, authenticate: true, })
                console.log(authStore.getState());
            }
        } catch (error) {
            authStore.setState({ token: null, username: null, authenticate: false, })
            console.log(authStore.getState());
            setRes(error.response.data?.error || error.response.data?.message);
        }
    }
    const handleGetCollections = async () => {
        try {
            const res = await Axios.get("/collections/getCollections")
            console.log(res);

        } catch (error) {
            console.log(error.response);
            setRes(error.response.data?.error || error.response.data?.message);
        }

    }
    const handlelogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        authStore.setState({ token: null, username: null, authenticate: false, })

    }

    return (
        <>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>username</Form.Label>
                        <Form.Control value={username()} onchange={(e) => setUsername(e.currentTarget.value)} type="text" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                            set a unique username
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onchange={(e) => setPassword(e.currentTarget.value)} placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                    <Button variant="danger" onClick={handlelogout}>logout</Button>
                    <Button variant="secondary" onClick={handleGetCollections}>get collections for this user</Button>
                    <hr />

                    <hr />
                    <Form.Text className="text-danger">
                        {res()}
                    </Form.Text>
                </Form>

            </div >

        </>
    )
};
