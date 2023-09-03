const placeholder = document.querySelector(".placeholder");
function getMyCoords() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      res({ lat: pos.coords.latitude, long: pos.coords.longitude });
    });
  });
}

async function getMyCity() {
  try {
    const { lat, long } = await getMyCoords();
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=ru`
    );
    const data = await res.json();
    console.log(data);
    placeholder.innerHTML = `
      Информация о нахождении: 
      <span>${data.city}</span>, <span>${data.locality}</span>
    `;
  } catch {
    console.log("Jшибка получения координат");
  }
}

getMyCity();
