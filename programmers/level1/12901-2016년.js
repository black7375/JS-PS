function monthDay(month) {
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = 0;

  for(let i = 0; i < month - 1; i++){
    day += months[i];
  }
  return day;
}

function solution(a, b) {
  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const day = monthDay(a) + b - 1;

  return week[day % week.length];
}
