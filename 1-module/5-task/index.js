function truncate(str, maxlength) {
  if (typeof str === "string" && str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}
