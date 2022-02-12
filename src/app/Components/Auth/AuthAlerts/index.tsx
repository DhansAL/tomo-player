import { Alert } from "solid-bootstrap";
import { createSignal } from "solid-js";

type AuthAlertProps = {
    resMessage: string;
    cleanMesg: () => void
}

export const AuthAlerts = (props: AuthAlertProps) => {
    const [alert, setAlert] = createSignal(false);

    const handleClose = () => {
        setAlert(false);
        props.cleanMesg
    }
    return (
        <Alert
            variant="warning"
            dismissible
            transition
            onClose={handleClose}
        >
            <p>{props.resMessage}</p>
        </Alert>
    )
}
