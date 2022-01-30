import dayjs from "dayjs";
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

/**
 *  streak maintainer function.
 *
 * this should run only once since app created
 */
export const setLsStreakParamsOnce = () => {
  localStorage.setItem("currentdate", dayjs().format("DD-MM-YYYY"));
  localStorage.setItem(
    "streakvalidtill",
    dayjs().add(1, "day").format("DD-MM-YYYY")
  );
  localStorage.setItem("streak", JSON.stringify(0));
};

/**
 *
 * update streak if and only current date matches ls.get(validDate)
 */
export const updateStreak = () => {
  //get current date in yyyymmdd
  const currDate = dayjs().format("DD-MM-YYYY");

  if (currDate == localStorage.getItem("currentDate")) {
    console.log("we dont do anything to streak on same day ");
    return;
  } else if (currDate == localStorage.getItem("streakvalidtill")) {
    //update streak , ls curdate, ls valid
    let currStreak = JSON.parse(localStorage.getItem("streak"));
    currStreak++;
    localStorage.setItem("streak", JSON.stringify(currStreak));
    localStorage.setItem("currentdate", currDate);
    localStorage.setItem(
      "streakvalidtill",
      dayjs().add(1, "day").format("DD-MM-YYYY")
    );
  } else {
    //streak = 0 ls=> valid = cur+1
    let currStreak = JSON.parse(localStorage.getItem("streak"));
    currStreak = 0;
    localStorage.setItem("streak", JSON.stringify(currStreak));

    localStorage.setItem("currentdate", currDate);
    localStorage.setItem(
      "streakvalidtill",
      dayjs().add(1, "day").format("DD-MM-YYYY")
    );
  }
};
