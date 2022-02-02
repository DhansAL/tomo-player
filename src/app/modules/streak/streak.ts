import dayjs from "dayjs";
const customParseFormat = require("dayjs/plugin/customParseFormat");
// dayjs.extend(customParseFormat);

/**
 *  streak maintainer function.
 *
 * this should run only once since app created i.e using it as a settings options
 */
export const setStreaking = () => {
  localStorage.setItem("currentdate", dayjs().format("MM/DD/YYYY"));
  localStorage.setItem(
    "streakvalidtill",
    dayjs().add(1, "day").format("MM/DD/YYYY")
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
  const currDate = dayjs().format("MM/DD/YYYY");
  // const currDate = dayjs().add(1, "day").format("MM/DD/YYYY");

  console.log(
    "the current date in dd mm yyyy format is ",
    "31/01/2022",
    "the date for tommorrow is",
    {
      bug: dayjs("31/01/2022").add(1, "day"),
      working: dayjs("01/31/2022").add(1, "day"),
    }
  );

  try {
    if (currDate == localStorage.getItem("currentdate")) {
      console.log(
        "nothing happens today, ",
        currDate,
        "ls date",
        localStorage.getItem("currentdate")
      );

      return;
    } else if (currDate == localStorage.getItem("streakvalidtill")) {
      // update streak , ls curdate, ls valid
      let currStreak = JSON.parse(localStorage.getItem("streak"));
      currStreak = currStreak + 1;
      localStorage.setItem("streak", JSON.stringify(currStreak));

      localStorage.setItem("currentdate", currDate);
      localStorage.setItem(
        "streakvalidtill",
        dayjs(currDate).add(1, "day").format("MM/DD/YYYY")
      );
      console.log("streak updated!");
    } else {
      let currStreak = JSON.parse(localStorage.getItem("streak"));
      currStreak = 0;
      localStorage.setItem("streak", JSON.stringify(currStreak));

      localStorage.setItem("currentdate", currDate);
      localStorage.setItem(
        "streakvalidtill",
        dayjs(currDate).add(1, "day").format("MM/DD/YYYY")
      );
      console.log("streak destroyed");
      console.log(currDate);
    }
  } catch (error) {
    console.log(error);
  }
};
