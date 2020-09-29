import { createGlobalStyle } from 'styled-components';

import SpoqaHanSansBold from 'fonts/Spoqa Han Sans Bold.ttf';
import SpoqaHanSansLight from 'fonts/Spoqa Han Sans Light.ttf';
import SpoqaHanSansRegular from 'fonts/Spoqa Han Sans Regular.ttf';
import SpoqaHanSansThin from 'fonts/Spoqa Han Sans Thin.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Spoqa Han Sans';
        src: local('Spoqa Han Sans'), local('Spoqa Han Sans'),
        url(${SpoqaHanSansBold}) format('ttf'),
        url(${SpoqaHanSansLight}) format('ttf'),
        url(${SpoqaHanSansRegular}) format('ttf'),
        url(${SpoqaHanSansThin}) format('ttf'),
        font-style: normal;
    }
`;
