import { Stack } from "solid-bootstrap";
import { DeleteUserCollection } from "../Components/UserMain/DeleteUserCollection";
import { Unauthorized } from "../Components/UserMain/Unauthorized";
import { GetUserCollections } from "../Components/UserMain/UserCollections";
import { UserStatusBar } from "../Components/UserMain/UserStatusBar";
import { UserSyncCollections } from "../Components/UserMain/UserSyncCollections";
import { authStore } from "../store/auth";

export const UserMain = () => {


    return (
        <>
            {
                authStore.getState().authenticate ? <>
                    <div class="p-3 bg-dark vw-100 vh-100 " >
                        <UserStatusBar />
                        <br />
                        <Stack gap={3} class="m-2 p-2" style={{ background: "#292d3a" }}>
                            <div className="d-flex m-2 p-2 flex-column justify-content-around">
                                <h3 class="text-light"> See what's all there in your database</h3>
                                <GetUserCollections />
                            </div>
                            <div className="d-flex m-2 p-2 flex-column justify-content-around">
                                <h3 class="text-light">Sync your collection online</h3>
                                <UserSyncCollections />
                            </div>
                            <div className="d-flex m-2 p-2 flex-column justify-content-around">
                                <h3 class="text-danger">Delete your online collection</h3>
                                <DeleteUserCollection />
                            </div>

                        </Stack>

                    </div>

                </>
                    : <>
                        <Unauthorized />
                    </>
            }

        </>
    );
};
