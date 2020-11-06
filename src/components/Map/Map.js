/*global kakao */
import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './Map.css';

const MapContainer = styled.div`
  width: 50%;
  height: 40vh;

  @media screen and (max-width: 1200px) {
    height: 17vh;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 30vh;
  }

  @media screen and (orientation: landscape) and (max-width: 1024px) {
    height: 30vh;
  }

  @media screen and (orientation: landscape) and (max-width: 812px) {
    height: 50vh;
  }
`;

const Map = ({ lat, lng, mapId }) => {
  const createMarker = useCallback(
    (map) => {
      const markerPosition = new kakao.maps.LatLng(lat, lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    },
    [lat, lng],
  );

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.GATSBY_KAKAO_MAP_KEY}&autoload=false`;
    document.body.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById(mapId);
        let options = {
          center: new kakao.maps.LatLng(lat, lng),
          level: 5,
        };
        const map = new kakao.maps.Map(container, options);

        createMarker(map);
      });
    };
  }, [lat, lng, mapId, createMarker]);

  return <MapContainer id={mapId} />;
};

export default Map;

Map.propTypes = {
  lat: PropTypes.string,
  lng: PropTypes.string,
  mapId: PropTypes.string,
};
