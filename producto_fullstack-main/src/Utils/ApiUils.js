export const getPoints = () => {
    const url = 'http://localhost:5000/';
    const peticion = fetch(url);
    return peticion
        .then(resp => resp.json())
        .then(({ data }) => {
            const points = [];
            data.forEach(point => {
                points.push({ lat: point.latitude, lng: point.longitude, color: point.color })
            });
            return points;
        });
};

export const getPointInfo = (lat, lng) => {
    const url = `https://nominatim.openstreetmap.org/search.php?q=${lat}%2C%20${lng}&polygon_geojson=1&format=jsonv2`;
    const peticion = fetch(url);
    return peticion
        .then(resp => resp.json())
        .then((info) => info[0]);
};