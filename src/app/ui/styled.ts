import ManropeBold from 'src/assets/fonts/Manrope-Bold.woff2';

import ManropeExtraBold from 'src/assets/fonts/Manrope-ExtraBold.woff2';
import ManropeRegular from 'src/assets/fonts/Manrope-Regular.woff2';
import ManropeSemiBold from 'src/assets/fonts/Manrope-SemiBold.woff2';

import colors from 'src/shared/constants/colors';
import { fonts } from 'src/shared/constants/typography';

import { createGlobalStyle } from 'styled-components';

const AppStyles = createGlobalStyle`

@font-face {
  font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${ManropeRegular}) format("woff2")        
}

@font-face {
  font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${ManropeSemiBold}) format("woff2")        
}

@font-face {
  font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${ManropeBold}) format("woff2")       
}

@font-face {
  font-family: "Manrope";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(${ManropeExtraBold}) format("woff2")        
} 

*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    padding: 0;
    margin: 0;
}

h1 {
  color: ${colors.darkPrimary};
  font-family: ${fonts.fontFamilyManrope};
  font-size: 36px;
  font-weight: 700;
  line-height: normal;
    @media (max-width: 1000px) {
        font-size: 30px;

    }
    @media (max-width: 800px) {
        font-size: 28px;
    }
}

h2 {
    color: ${colors.darkPrimary};
    font-family: ${fonts.fontFamilyManrope};
    font-size: 36px;
    font-weight: 700;
    line-height: normal;
}


h3 {
  color: ${colors.darkPrimary};
  font-family: ${fonts.fontFamilyManrope};
  font-size: 30px;
  font-weight: 700;
  line-height: normal;
    @media (max-width: 1280px) {
        font-size: 28px;
    }
    @media (max-width: 800px) {
        font-size: 24px;
    }
}


h4 {
  color: ${colors.darkPrimary};
  font-family: ${fonts.fontFamilyManrope};
  font-size: 30px;
  font-weight: 700;
  line-height: 130%;
    @media (max-width: 1000px) {
        font-size: 28px;
    }
    @media (max-width: 800px) {
        font-size: 24px;
    }
}


h5 {
  color: ${colors.darkPrimary};
  font-family: ${fonts.fontFamilyManrope};
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
}


h6 {
  color: ${colors.darkPrimary};
  font-family: ${fonts.fontFamilyManrope};
  font-size: 20px;
  font-weight: 700;
  line-height: 110%;
}


p {
    font-family: ${fonts.fontFamilyManrope};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    @media (max-width: 1280px) {
        font-size: 20px;
    }
    @media (max-width: 1000px) {
        font-size: 18px;
    }
    @media (max-width: 800px) {
        font-size: 16px;
    }
}

span {
    font-family: ${fonts.fontFamilyManrope};
    color: ${colors.darkPrimary};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}


ul,
    ol {
    list-style: none;
}

html {
    scroll-behavior: smooth;

&:focus-within {
        scroll-behavior: smooth;
    }
}

body {
    min-height: 100%;
    text-rendering: optimizespeed;
   // max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
}

a {
    font-family: ${fonts.fontFamilyManrope};
    color: inherit;
    text-decoration: inherit;
}

@media screen and (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
}
@media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }
*,
*::before,
*::after {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
    }
}

button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
}

`;

export default AppStyles;
