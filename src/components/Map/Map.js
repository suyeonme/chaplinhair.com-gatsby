/*global kakao */
import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './Map.css';
import Address from 'assets/icons/address.svg';

const MapContainer = styled.div`
  width: 50%;
  height: 40vh;

  @media screen and (max-width: 64rem) {
    height: 17vh;
  }

  @media screen and (orientation: landscape) and (max-width: 64rem) {
    height: 30vh;
  }

  @media screen and (orientation: landscape) and (max-width: 50.75rem) {
    height: 45vh;
  }

  @media screen and (max-width: 36rem) {
    width: 100%;
  }
`;

const Map = ({ lat, lng, mapId, name }) => {
  const createOverlay = useCallback(
    (map) => {
      const overlayContent = document.createElement('div');
      overlayContent.className = 'overlay';
      overlayContent.innerHTML = `<span>${name}</span>`;
      const overlayPosition = new kakao.maps.LatLng(lat, lng);

      const customOverlay = new kakao.maps.CustomOverlay({
        position: overlayPosition,
        content: overlayContent,
        yAnchor: 4.5,
        xAnchor: 0.6,
      });

      customOverlay.setMap(map);
    },
    [lat, lng, name],
  );

  const createMarker = useCallback(
    (map) => {
      const imageSrc = Address;
      const imageSize = new kakao.maps.Size(40, 45);
      const imageOption = {
        offset: new kakao.maps.Point(27, 69),
      };

      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption,
      );

      let markerPosition = new kakao.maps.LatLng(lat, lng);

      let marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
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
        createOverlay(map);
      });
    };
  }, [lat, lng, mapId, name, createOverlay, createMarker]);

  return <MapContainer id={mapId} />;
};

export default Map;

Map.propTypes = {
  lat: PropTypes.string,
  lng: PropTypes.string,
  mapId: PropTypes.string,
  name: PropTypes.string,
};
