/**
 * 
 * uses the streak maintainer module to check streak and update accordingly
 */
export const Streak = () => {


    return (
        <>
            <div class="m-1 p-2 d-flex flex-column justify-content-around align-items-center">
                <span class="text-warning">Streak</span>
                {localStorage.getItem("usingStreaks") != null ? (
                    <h4 class="text-light"> {JSON.parse(localStorage.getItem("streak"))}
                    </h4>)
                    :
                    <p className="text-muted">activate streaks in settings</p>
                }
            </div>
        </>
    )
};

