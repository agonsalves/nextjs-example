import { motion } from 'framer-motion';
import styled, { createGlobalStyle, css } from 'styled-components';
import { device } from './mediaQueries';

export const GlobalStyle = createGlobalStyle`
  html {
      font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      font-size: 62.5%;
  }

  body {
      margin: 0;
      padding: 0;
      image-rendering: -webkit-optimize-contrast;
      -webkit-animation-duration: 0.1s;
      -webkit-animation-name: fontfix;
      -webkit-animation-iteration-count: 1;
      -webkit-animation-timing-function: linear;
      -webkit-animation-delay: 0.1s;
      font-family: acumin-pro, sans-serif;
      min-height: 100vh;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
  }

  * {
      outline: none;
  }

  img {
      display: block;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      border-style: none;
  }

  p {
      margin-top: 0;
  }

  address {
      font-style: normal;
  }

  blockquote, q {
      quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
      content: none;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  a {
      color: #0686F3;
  }

  a:hover {
      color: #056bc1;
  }

  input,
  button,
  textarea,
  select {
      font: inherit;
  }

  input::-ms-clear{
      display: none!important;
  }

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  @media all and (-ms-high-contrast:none), all and (-ms-high-contrast:active) {
      html {
          /*overflow: hidden;*/
          height: 100%;
      }
  }

  @media (prefers-reduced-motion: reduce) {
      * {
          animation-play-state: paused !important;
          transition: none !important;
          scroll-behavior: auto !important;
      }
  }
`;

interface TitleProps {
  type?: string;
}

export const Title = styled(motion.h1)<TitleProps>`
  font-weight: 800;
  font-size: 6rem;
  max-width: inherit;

  ${({ type }) => type === 'person' && css`
    font-size: 3.75rem;
    color: ${({ theme }) => theme.colors.blue};
  `};

  @media ${device.mobile} {
    display: flex;
    align-items: center;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Aside = styled.aside`
  position: relative;
`;
