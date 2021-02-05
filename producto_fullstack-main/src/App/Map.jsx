import React, { useRef, useEffect } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import { getPoints, getPointInfo } from '../Utils/ApiUils';
import './Map.css';

function Map(props) {
  const {
    lat,
    lng,
    zoom,
    basemapURL,
    requestPoint,
  } = props;

  const map = useRef({});

  requestPoint.current = async () => {
    const pointsLayer = await createPointsLayer();
    const popup = L.popup({ closeButton: true });
    pointsLayer.addTo(map.current);

    pointsLayer.eachLayer(point => {
      point.on('click', async (e) => {
        await getPointInfo(e.latlng.lat, e.latlng.lng)
          .then(info => {
            let htmlContent;
            htmlContent = makeMarkupOnePoint(e.latlng.lat, e.latlng.lng, info.display_name);
            popup.setContent(htmlContent);
            popup.setLatLng(e.latlng);
            if (!popup.isOpen()) {
              popup.openOn(map.current);
            }
          })
      });
    });
  };


  useEffect(() => {
    map.current = L.map('map', {
      center: [lat, lng],
      zoom,
      zoomControl: false
    });
    const basemap = L.tileLayer(basemapURL, {
      detectRetina: true,
      retina: '@2x',
    });
    basemap.addTo(map.current)

  }, [
    lat,
    lng,
    zoom,
    basemapURL,
  ]);
  return (
    <div id="map" />
  );
}

const createPointsLayer = async () => {
  let pointData;
  await getPoints().then(points => pointData = points);

  const pointsArray = [];
  pointData.forEach(p => {
    const circleMarker = L.circleMarker(p, {
      color: `#${p.color}`
    }).setRadius(1);
    pointsArray.push(circleMarker);
  });

  return L.layerGroup(pointsArray);
};

const makeMarkupOnePoint = (lat, lng, info = '') => {
  return `
    <div class="widget">
    ${lat ? `
    <h3>${lat}, ${lng}</h3>
    `: ''}
    ${info ? `
    <h4>${info}</h4>
    `: '<h4>No hay dirección</h4>'}
    </div>
  `;
}


Map.propTypes = {
  basemapURL: PropTypes.string,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number,
  requestPoint: PropTypes.shape({
    current: PropTypes.func,
  })
};
Map.defaultProps = {
  zoom: 13,
  basemapURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  requestPoint: {
    current: () => { },
  }
}

export default Map;

