import { Alert, Button } from "solid-bootstrap";
import { createEffect, createSignal } from "solid-js";
import { collectionFlush } from "../../../modules/FlushLS/CollectionFlush";

export const CollectionFlush = () => {
  const [deleteMessage, setDeleteMessage] = createSignal(null)
  const [alert, setAlert] = createSignal(false);

  createEffect(() => {
    if (deleteMessage() != null) {
      setAlert(true);
    }
  });
  const handleCollectionFlush = () => {
    setDeleteMessage(collectionFlush())
  }
  const handleOnClose = () => {
    setAlert(false);
    setDeleteMessage(null)
  }

  return <div>

    <div style={{ background: "#292d3a" }} class="m-5 d-flex flex-column  h-50 p-4">
      <h4 className="text-light">Delete Local Collection</h4>
      <p className="text-muted">This will delete all your shows in collections saved locally.</p>
      <p className="text-info">However the record of synced shows will be kept until you delete your online collection.</p>
      {alert() ? (
        <Alert
          variant="warning"
          dismissible
          transition
          onClose={handleOnClose}
        >
          <p>{deleteMessage()}.</p>
        </Alert>
      ) : null}
      <div className="d-flex flex-row justify-content-end">
        <Button onclick={handleCollectionFlush} variant="danger">Delete Local Collections</Button>
        <br />
      </div>
    </div>
  </div>;
};
