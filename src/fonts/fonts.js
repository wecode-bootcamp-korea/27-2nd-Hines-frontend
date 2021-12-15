import { createGlobalStyle } from 'styled-components';
import NotoSansBold from './NotoSansKR-Bold.woff';
import NotoSansMedium from './NotoSansKR-Medium.woff';
import NotoSansRegular from './NotoSansKR-Regular.woff';
import NotoSansLight from './NotoSansKR-Light.woff';

export default createGlobalStyle`
    @font-face {
        font-family: "Noto Sans Bold";
        src: local("Noto Sans Bold"),
        url(${NotoSansBold}) format('woff');
        font-weight: 700;
        font-style: bold;
    }
    @font-face {
        font-family: "Noto Sans Medium";
        src: local("Noto Sans Medium"),
        url(${NotoSansMedium}) format('woff');
        font-weight: 500;
        font-style: medium;
    }
    @font-face {
        font-family: "Noto Sans Regular";
        src: local("Noto Sans Regular"),
        url(${NotoSansRegular}) format('woff');
        font-weight: 400;
        font-style: regular;
    }
    @font-face {
        font-family: "Noto Sans Light";
        src: local("Noto Sans Light"),
        url(${NotoSansLight}) format('woff');
        font-weight: 300;
        font-style: light;
    }

`;
