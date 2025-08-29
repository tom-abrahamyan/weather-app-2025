function getDailyAverageForecast(list) {
  const grouped = {};

  list.forEach((item) => {
    const date = new Date(item.dt_txt);
    const day = date.toLocaleDateString("en-US");

    if (!grouped[day]) {
      grouped[day] = { temps: [], item };
    }

    grouped[day].temps.push(item.main.temp);
  });

  return Object.entries(grouped).map(([day, data]) => {
    const avgTemp =
        data.temps.reduce((sum, t) => sum + t, 0) / data.temps.length;


    return {
      ...data.item,
      main: {
        ...data.item.main,
        temp: avgTemp,
      },
    };
  });
}
export default getDailyAverageForecast;
