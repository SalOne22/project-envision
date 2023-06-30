export default startYear => {
  const years = [];
  const lastYear = new Date().getFullYear();

  for (let year = lastYear; year >= startYear; year -= 1) {
    years.push({
      id: year,
      name: year,
    });
  }

  return years;
};
