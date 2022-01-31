import { Button, ListGroup } from "solid-bootstrap";
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
    console.log(resMesg());
  };

  if (localStorage.getItem("Collections")) {
    let toFormat = JSON.parse(localStorage.getItem("Collections"));
    let formatedData = [];
    for (let i = 0; i < toFormat.length; i++) {
      formatedData.push({ name: toFormat[i].name });
    }
    setDetailsToSync(formatedData);
  }
  return (
    <>
      <div
        class=" m-4 p-2 d-flex flex-column "
        style={{ background: "#292d3a" }}
      >
        <h3 class="text-light">
          Sync manually all the names of show you added till now
        </h3>
        <h5 class="text-light">These are the things that are about to sync</h5>
        <p className="text-info">we only sync name for now</p>
        {detailsToSync().length > 0 ? (
          <>
            <For each={detailsToSync()}>
              {/* TODO: set type declarations */}
              {(name: any, i) => <span class="text-light">{name.name}</span>}
            </For>

            {resMesg() != null ? (
              resMesg().greet ? (
                // in case user had his first sync
                <h3 class="m-4 p-3 text-success">{resMesg().greet}</h3>
              ) : (
                <>
                  {resMesg().exists.length > 0 ? (
                    <div class="w-25 m-3 p-2">
                      <h6 class="text-danger">{resMesg().error}</h6>
                      <div class="d-flex flex-column">
                        <For each={resMesg().exists}>
                          {/* TODO: set type declarations */}
                          {(exists: string) => (
                            <span class="text-light">{exists},</span>
                          )}
                        </For>
                      </div>
                    </div>
                  ) : (
                    <p class="text-info">no existing items sent.</p>
                  )}
                  {resMesg().new.length > 0 ? (
                    <div class="w-25 m-3 p-2">
                      <h6 class="text-info">{resMesg().msg}</h6>
                      <For each={resMesg().new}>
                        {/* TODO: set type declarations */}
                        {(newly: string) => (
                          <span class="text-light">{newly},</span>
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
          <p class="text-info">
            you haven't added any collection yet, try adding some to sync later
            ^_^
          </p>
        )}

        <Button variant="success" onclick={handleCollectionSync}>
          Sync{" "}
        </Button>
      </div>
    </>
  );
};
