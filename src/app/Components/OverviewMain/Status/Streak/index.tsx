import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

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

