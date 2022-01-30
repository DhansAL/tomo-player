import dayjs from "dayjs";
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

/**
 *  streak maintainer function.
 *
 * this should run only once since app created i.e using it as a settings options
 */
export const setStreaking = () => {
  localStorage.setItem("currentdate", dayjs().format("DD-MM-YYYY"));
  localStorage.setItem(
    "streakvalidtill",
    dayjs().add(1, "day").format("DD-MM-YYYY")
  );
  localStorage.setItem("streak", JSON.stringify(0));
  localStorage.setItem("usingStreaks", JSON.stringify(true));
};

export const destroyStreak = () => {
  localStorage.removeItem("currentdate");
  localStorage.removeItem("streakvalidtill");
  localStorage.removeItem("streak");
  localStorage.removeItem("usingStreaks");
};

/**
 *
 * update streak if and only current date matches ls.get(validDate)
 */

//FIXME: REQUIRES TESTING
export const updateStreak = () => {
  //get current date in yyyymmdd
  const currDate = dayjs().format("DD-MM-YYYY");
  console.log(currDate);

  try {
    if (currDate == localStorage.getItem("currentdate")) {
      return;
    }
    if (currDate == localStorage.getItem("streakvalidtill")) {
      //update streak , ls curdate, ls valid
      let currStreak = JSON.parse(localStorage.getItem("streak"));
      currStreak++;
      localStorage.setItem("streak", JSON.stringify(currStreak));
      localStorage.setItem("currentdate", currDate);
      localStorage.setItem(
        "streakvalidtill",
        dayjs().add(1, "day").format("DD-MM-YYYY")
      );
    }
    if (
      currDate != localStorage.getItem("streakvalidtill") ||
      localStorage.getItem("currentdate")
    ) {
      let currStreak = JSON.parse(localStorage.getItem("streak"));
      currStreak = 0;
      localStorage.setItem("streak", JSON.stringify(currStreak));

      localStorage.setItem("currentdate", currDate);
      localStorage.setItem(
        "streakvalidtill",
        dayjs().add(1, "day").format("DD-MM-YYYY")
      );
    }
  } catch (error) {
    console.log(error);
  }
};
