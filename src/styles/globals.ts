import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  */
 :root {
    --bg-color: #f8f8f8;
    --bg-header: white;
    --color-content: #22231f;
    --color-content-light: #8a8b8c;
    --color-content-dark: #0c0c0c;
    --color-theme: #27AE60;
    --color-theme-light: #99FFBF;
    --color-theme-dark: #00954A;
    --color-header-hover: white;
    --color-backlog: #00A1FF;
    --color-development: #F14D83;
    --color-complete: #84C05D;
    --color-waiting: gray;
    --color-warning: #DB0000;
    --color-warning-dark: #960000;
    --color-like: #FF5159;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    /* --font-weight-extrabold: 800; */
    --font-family: 'Inter', sans-serif;
    --zindex-default: 1;
    --zindex-overlay: 6;
    --zindex-header: 10;
    --border-radius: 4px;
    --transition-in: all .4s ease;
    --transition-out: all .6s ease;
  }

  ::selection {
    background: var(--color-theme-light);
  }

  ::-webkit-input-placeholder {
    color: rgba(122,122,122,.75);
  }

  :-ms-input-placeholder {
    color: rgba(122,122,122,.75);
  }

  ::placeholder {
    color: rgba(122,122,122,.75);
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }
  html {
    font-size: 16px;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    scroll-behavior: auto;
  }
  body {
    line-height: 1;
    font-size: 16px;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background:  var(--bg-color);
    color: var(--color-content);
    font-family: 'Inter', sans-serif;
    font-weight: var(--font-weight-regular);

  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  a {
    color: var(--color-theme);
    text-decoration: none;

    &:hover, &:focus {
      color: var(--color-theme-dark);
    }
  }

  strong {
    font-weight: var(--font-weight-medium);
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  .text-right {
    text-align: right !important;
  }

  .grid-columns {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    overflow-y: scroll;

    @media (min-width: 768px) {
      overflow-y: auto;
    }
  }

  .grid-task-page {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 30px 0;

    > section {
      order: 2;
    }

    > aside {
      order: 1;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 330px;
      grid-gap: 0 30px;

      > section {
        order: 1;
      }

      > aside {
        order: 2;
      }
    }
  }

  .single-page {
    h2 {
      margin-bottom: 20px;
      color: var(--color-content);
      font-size: 1.4rem;
      font-weight: var(--font-weight-medium);
    }

    p {
      margin-bottom: 15px;
      color: var(--color-content);
      font-size: 1rem;
      font-weight: var(--font-weight-regular);
      line-height: 1.7;
    }
  }

  .btn-groups {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > button {
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
`

export default GlobalStyles
