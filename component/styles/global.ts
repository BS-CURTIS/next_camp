import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ theme: any }>`
@charset "utf-8";
@font-face {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2)
      format("woff2"),
    url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff)
      format("woff"),
    url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf)
      format("opentype");
}
@font-face {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2)
      format("woff2"),
    url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff)
      format("woff"),
    url(https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf)
      format("opentype");
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: -0.05em;
    font-weight: 400;
    word-break: keep-all;
}
body {
    font-size: 0.75em;
    font-family: "Noto Sans KR", dotum, sans-serif;
    background: ${({ theme }) => theme.body};
    transition: all 0.25s linear;
    color: ${({ theme }) => theme.text};
}

  html,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  form,
  fieldset,
  img {
    margin: 0;
    padding: 0;
    border: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1em;
    font-family: "Noto Sans KR", dotum, sans-serif;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  
  ul,
  dl,
  dt,
  dd {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  legend {
    position: absolute;
    margin: 0;
    padding: 0;
    font-size: 0;
    line-height: 0;
    text-indent: -9999em;
    overflow: hidden;
  }
  label,
  input,
  button,
  select,
  img {
    vertical-align: middle;
    font-size: 1em;
  }
  input,
  button {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR", dotum, sans-serif;
    font-size: 1.3em;
  }
  input[type="submit"] {
    cursor: pointer;
  }
  button {
    cursor: pointer;
  }
  
  textarea,
  select {
    font-family: "Noto Sans KR", dotum, sans-serif;
    font-size: 1em;
  }
  select {
    margin: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
  hr {
    display: none;
  }
  pre {
    overflow-x: scroll;
    font-size: 1.1em;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  
  *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  input[type="text"],
  input[type="password"],
  textarea {
    transition: all 0.3s ease-in-out;
    outline: none;
  }
  
  input[type="text"]:focus,
  input[type="password"]:focus,
  textarea:focus,
  select:focus {
    -webkit-box-shadow: 0 0 5px #9ed4ff;
    -moz-box-shadow: 0 0 5px #9ed4ff;
    box-shadow: 0 0 5px #9ed4ff;
    border: 1px solid #558ab7 !important;
  }
  
  .placeholdersjs {
    color: #aaa !important;
  }
  
  .after:after {
    content: "";
    display: block;
    clear: both;
  }
  .fx {
    position: fixed;
  }
  .re {
    position: relative;
  }
  .ab {
    position: absolute;
  }
  .full {
    width: 100%;
  }
  .max {
    max-width: 100%;
  }
  .f-l {
    float: left;
  }
  .f-r {
    float: right;
  }
  .t-r {
    text-align: right;
  }
  .t-l {
    text-align: left;
  }
  .t-c {
    text-align: center;
  }
  .bold {
    font-weight: 700;
  }
  .normal {
    font-weight: 400;
  }
  .medium {
    font-weight: 500;
  }
  .light {
    font-weight: 300;
  }
  .thin {
    font-weight: 100;
  }
  .block {
    display: block;
  }
  .mg-auto {
    margin: auto;
  }
  .mont-b {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }
  .mont-s {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }
  .mont-l {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }
  .noto-sans {
    font-family: "Noto Sans KR", dotum, sans-serif;
  }
`;

export default GlobalStyle;
