export async function getWeatherData(cityName='gyumri') {
  try {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=c2cb41d83e003e690090057aeeab736d`
    );
    const resultData = await res.json();
    return resultData;

  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getCityImage(cityName='gyumri') {
  try {
    const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
            cityName.toLowerCase()
        )}`
    );
    const resultImg = await res.json();
    return (
        resultImg.originalimage?.source ||
        resultImg.thumbnail?.source ||
        'https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg'
    );
  } catch (err) {
    console.error(err);
    return 'https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg';
  }
}