function sumSalary(salaries) {
  let sum = 0;

  for (let value of Object.values(salaries)) {
    if (typeof value === "number" && isFinite(value)) {
      sum += value;
    }
  }
  return sum;
}
