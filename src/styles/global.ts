import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --text-base: #101820;
    --text-500: #48626f;
    --brand-base: #0b66ff;
    --icon-base: #7f949e;
    --red-400: #ffc4b2;
    --pink-base: #f51f7e;
    --pink-400: #fcbbd8;
    --purple-base: #a200f2;
    --purple-400: #e3b2fb;
    --indigo-400: #d0bcff;
    --blue-base: #2979ff;
    --blue-400: #bed6ff;
    --sky-base: #009dff;
    --sky-400: #b2e1ff;
    --cyan-base: #00bcd4;
    --cyan-400: #b2eaf2;
    --green-base: #00bfa5;
    --green-400: #b2ebe4;
    --lime-base: #64dd17;
    --lime-400: #d0f4b9;
    --yellow-base: #ffab00;
    --yellow-400: #ffe5b2;
    --orange-base: #ff6f00;
    --orange-400: #ffd3b2;
    --gray-base: #6d7c87;
    --gray-400: #dbeaf5;
    --neutral-base: #7a7a7a;
    --neutral-100: #fafafa;
    --neutral-200: #f2f2f2;
    --neutral-300: #eff0f1;
    --neutral-400: #e8e8e8;
    --neutral-500: #dddddd;
    --neutral-600: #d2d2d2;
    --neutral-700: #c5c5c5;
    --neutral-800: #b5b5b5;
    --neutral-900: #a2a2a2;
    --neutral-1000: #8e8e8e;
    --light-500: #eff0f1;
    --dark-1000: #1f2c33;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button {
    cursor: pointer;
  }
  `
