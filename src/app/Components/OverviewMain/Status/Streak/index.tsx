import dayjs from 'dayjs';
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

export const Streak = () => {
    //get current date in yyyymmdd
    const currDate = dayjs().format("DD-MM-YYYY")
    const streakValidTill = dayjs().add(1, 'day').format('DD-MM-YYYY')
    console.log(currDate, streakValidTill);

    // console.log(streakValidTill.diff(currentTime, "hours"), "remaining time in hrs");


    // need a current date with time of played
    // and compare it with same time but with +1 day

    //eg user starts playing @ d1 = 30-01-22 6:30AM if next time he plays d2>=d1 like 31-01-22 6:30pm 



    return <div class="m-1 p-2 d-flex flex-column justify-content-around align-items-center">
        <span class="text-warning">Streak</span>

        <h4 class="text-light">{/* ls.get streak  */} 0</h4>
    </div>;
};

