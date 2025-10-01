const setDate = (t) => {
  const date = new Date(t);

  const day = date.getUTCDate();
  const monthIndex = date.getUTCMonth(); // 0-based
  const year = date.getUTCFullYear();

  // Day suffixes
  const suffixes = ["th", "st", "nd", "rd"];
  const v = day % 100;
  const suffix = suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];

  // Month short names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${day}${suffix} ${months[monthIndex]} '${year.toString().slice(-2)}`;
};

export default setDate;
