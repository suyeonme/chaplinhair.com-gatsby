/*global kakao */
import React, { useEffect } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 30rem;
  height: 40vh;
`;

const Map = ({ lat, lng, mapId }) => {
  useEffect(() => {
    const mapscript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src =
        'https://dapi.kakao.com/v2/maps/sdk.js?appkey=d566a9bb6eac6eb7b860e7fbac08815e&autoload=false';
      document.head.appendChild(script);
      ///////
      let container = document.getElementById(mapId);

      let options = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 5,
      };

      const map = new kakao.maps.Map(container, options);
      let markerPosition = new kakao.maps.LatLng(lat, lng);

      let marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    };

    mapscript();
  }, [lat, lng, mapId]);

  return <MapContainer id={mapId} />;
};

export default Map;
