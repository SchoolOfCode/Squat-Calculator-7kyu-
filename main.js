/* 
------------------------
|   Squat Calculator   |
------------------------
Bootcampers do squats every morning, including weekends.
They are encouraged to focus on continuous improvement, which means doing more squats each day compared to the last.

You are given the following information: 
- weeks: the length of the bootcamp in weeks
- starting: how many squats the bootcamper does on their first day
- increase: how many more squats are done each day compared to the last

Calculate how many squats a bootcamper will be able to do on the last day of their bootcamp.
Output should be an integer.

The inputs for the parameters should be integers, if not return "invalid input"
*/

export function squats(weeks, starting, increase) {
  if (
    typeof weeks != "Number" ||
    typeof starting != "Number" ||
    typeof increase != "Number"
  ) {
    return "invalid input";
  }

  const days = weeks * 7;

  let sum = 0;
  for (let i = 0; i < days; i++) {
    sum += starting + i * increase;
  }
  return sum;
}
