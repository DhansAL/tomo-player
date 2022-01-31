import { Unauthorized } from "../Components/UserMain/Unauthorized";
import { GetUserCollections } from "../Components/UserMain/UserCollections";
import { UserStatusBar } from "../Components/UserMain/UserStatusBar";
import { authStore } from "../store/auth";

export const UserMain = () => {


    return (
        <>
            {
                authStore.getState().authenticate ? <>
                    <div class="p-3 bg-dark vw-100 vh-100 " style={{ overflow: "hidden" }}>
                        <UserStatusBar />
                        <GetUserCollections />

                    </div>
                </>
                    : <>
                        <Unauthorized />
                    </>
            }

        </>
    );
};
