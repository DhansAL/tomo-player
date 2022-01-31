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
                        <GetUserCollections />
                        <UserSyncCollections />

                    </div>
                </>
                    : <>
                        <Unauthorized />
                    </>
            }

        </>
    );
};
