function solution(phone_number) {
  const division = phone_number.length - 4;
  const hidden   = "*".repeat(division);
  const show     = phone_number.substring(division);
  return hidden + show;
}
