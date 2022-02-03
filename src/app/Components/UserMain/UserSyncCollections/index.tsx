import { Button, ListGroup, Modal } from "solid-bootstrap";
import { createSignal, For } from "solid-js";
import { addCollections } from "../../../apiEvents/collections/addCollection";

/**
 *
 * @description manually sync the local collection
 */
export const UserSyncCollections = () => {
  const [detailsToSync, setDetailsToSync] = createSignal([]);
  const [resMesg, setResMesg] = createSignal(null);

  const handleCollectionSync = async () => {
    //@ts-expect-error TODO: set type declarations
    const res = await addCollections(detailsToSync());
    setResMesg(res);
  };

  if (localStorage.getItem("Collections")) {
    let toFormat = JSON.parse(localStorage.getItem("Collections"));
    let formatedData = [];
    for (let i = 0; i < toFormat.length; i++) {
      formatedData.push({ name: toFormat[i].name });
    }
    setDetailsToSync(formatedData);
  }

  //modal utils
  const [show, setShow] = createSignal(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => {
    setShow(false)
    setResMesg(null)
  }
  return (
    <div>
      <Button variant="secondary" onclick={handleOpen}>Proceed to sync</Button>

      <Modal
        show={show()}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        class="bg-dark"
      >

        <div
          class="m-1 p-4 d-flex flex-column bg-dark "
        >

          <h5 class="text-warning">You are about to sync these items which are present in your local collection.</h5>
          {detailsToSync().length > 0 ? (
            <>
              <div class="m-2">
                <For each={detailsToSync()}>
                  {/* TODO: set type declarations */}
                  {(name: any, i) => <li class="text-light">{name.name}</li>}
                </For>
              </div>


              {resMesg() != null ? (
                // in case user had his first sync
                resMesg().greet ? (
                  <h5 class=" p-2 text-info">{resMesg().greet}</h5>
                ) : (
                  <>
                    {/* if existing show is sent to database */}
                    {resMesg().exists.length > 0 ? (
                      <div class="p-2">
                        <h5 class="text-warning">Existing item(s) on Database</h5>
                        <span class="text-info">Just informing that these items are already present in your database and wont create duplicates.</span>
                        <div class="d-flex flex-column">
                          <For each={resMesg().exists}>
                            {/* TODO: set type declarations */}
                            {(exists: string) => (
                              <li class="text-secondary">{exists}</li>
                            )}
                          </For>
                        </div>
                      </div>
                    ) : (
                      <p class="text-success">no existing items sent.</p>
                    )}
                    {resMesg().new.length > 0 ? (
                      <div class="p-2">
                        <h5 class="text-success">New item(s) sent to Database</h5>
                        <span className="text-info">these items are successfully added to your online collection.</span>
                        <For each={resMesg().new}>
                          {/* TODO: set type declarations */}
                          {(newly: string) => (
                            <li class="text-light">{newly}</li>
                          )}
                        </For>
                      </div>
                    ) : (
                      <p class="text-warning">
                        no new items sent, was this intentional?
                      </p>
                    )}
                  </>
                )
              ) : null}
            </>
          ) : (
            <p class="text-secondary">
              you haven't added any show in your collection yet, try adding some to sync later
              ^_^
            </p>
          )}

          {detailsToSync().length > 0 ? <Button variant="success" onclick={handleCollectionSync}>
            Sync{" "}
          </Button> : null}
        </div>




      </Modal>

    </div>
  );
};
