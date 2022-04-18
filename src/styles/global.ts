import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --rgb-shadow-1: rgba(102, 102, 102, 0.09);
    --rgb-shadow-2: rgba(102, 102, 102, 0.06);
    --text-base: #101820;
    --text-500: #48626f;
    --text-100: #fff;
    --brand-base: #0b66ff;
    --brand-1000: #3c85ff;
    --brand-900: #0952cc;
    --icon-base: #7f949e;
    --red-base: #ff3d00;
    --red-1000: #ff5019;
    --red-900: #ff6433;
    --red-800: #ff774c;
    --red-700: #ff8b66;
    --red-600: #ff9e7f;
    --red-500: #ffb199;
    --red-400: #ffc4b2;
    --red-300: #ffd8cc;
    --red-200: #ffebe5;
    --red-100: #fff5f2;
    --pink-base: #f51f7e;
    --pink-1000: #f6338a;
    --pink-900: #f74a98;
    --pink-800: #f860a4;
    --pink-700: #f977b2;
    --pink-600: #fa8ebe;
    --pink-500: #fba5cb;
    --pink-400: #fcbbd8;
    --pink-300: #fdd2e5;
    --pink-200: #fee8f2;
    --pink-100: #fef3f8;
    --purple-base: #a200f2;
    --purple-1000: #ab19f3;
    --purple-900: #b533f5;
    --purple-800: #bd4cf5;
    --purple-700: #c766f7;
    --purple-600: #d07ff8;
    --purple-500: #da99fa;
    --purple-400: #e3b2fb;
    --purple-300: #ecccfc;
    --purple-200: #f5e5fd;
    --purple-100: #faf2fe;
    --indigo-base: #651dff;
    --indigo-1000: #7435ff;
    --indigo-900: #844bff;
    --indigo-800: #9362ff;
    --indigo-700: #a378ff;
    --indigo-600: #b28fff;
    --indigo-500: #c1a5ff;
    --indigo-400: #d0bcff;
    --indigo-300: #e0d2ff;
    --indigo-200: #efe8ff;
    --indigo-100: #f7faff;
    --blue-base: #2979ff;
    --blue-1000: #3e86ff;
    --blue-900: #5494ff;
    --blue-800: #69a1ff;
    --blue-700: #7fafff;
    --blue-600: #94bcff;
    --blue-500: #a9c9ff;
    --blue-400: #bed6ff;
    --blue-300: #d4e4ff;
    --blue-200: #e9f1ff;
    --blue-100: #f4f8ff;
    --sky-base: #009dff;
    --sky-1000: #19a6ff;
    --sky-900: #33b1ff;
    --sky-800: #4cbaff;
    --sky-700: #66c4ff;
    --sky-600: #7fceff;
    --sky-500: #99d8ff;
    --sky-400: #b2e1ff;
    --sky-300: #ccebff;
    --sky-200: #e5f5ff;
    --sky-100: #f2faff;
    --cyan-base: #00bcd4;
    --cyan-1000: #19c2d8;
    --cyan-900: #33c9dd;
    --cyan-800: #4cd0e0;
    --cyan-700: #66d7e5;
    --cyan-600: #7fdde9;
    --cyan-500: #99e4ee;
    --cyan-400: #b2eaf2;
    --cyan-300: #ccf2f6;
    --cyan-200: #e5f8fa;
    --cyan-100: #f2fbfd;
    --green-base: #00bfa5;
    --green-1000: #19c5ae;
    --green-900: #33ccb7;
    --green-800: #4cd2c0;
    --green-700: #66d9c9;
    --green-600: #7fdfd2;
    --green-500: #99e5db;
    --green-400: #b2ebe4;
    --green-300: #ccf2ed;
    --green-200: #e5f8f6;
    --green-100: #f2fcfa;
    --lime-base: #64dd17;
    --lime-1000: #73e02e;
    --lime-900: #83e445;
    --lime-800: #92e75c;
    --lime-700: #a2eb74;
    --lime-600: #b1ee8b;
    --lime-500: #c1f1a2;
    --lime-400: #d0f4b9;
    --lime-300: #e0f8d1;
    --lime-200: #effbe7;
    --lime-100: #f7fdf3;
    --yellow-base: #ffab00;
    --yellow-1000: #ffb319;
    --yellow-900: #ffbc33;
    --yellow-800: #ffc44c;
    --yellow-700: #ffcd66;
    --yellow-600: #ffd57f;
    --yellow-500: #ffdd99;
    --yellow-400: #ffe5b2;
    --yellow-300: #ffeecc;
    --yellow-200: #fff6e5;
    --yellow-100: #fffbf2;
    --orange-base: #ff6f00;
    --orange-1000: #ff7d19;
    --orange-900: #ff8c33;
    --orange-800: #ff9a4c;
    --orange-700: #ffa966;
    --orange-600: #ffb77f;
    --orange-500: #ffc599;
    --orange-400: #ffd3b2;
    --orange-300: #ffe2cc;
    --orange-200: #fff0e5;
    --orange-100: #fff8f2;
    --gray-base: #6d7c87;
    --gray-1000: #7f919e;
    --gray-900: #92a5b3;
    --gray-800: #a3b8c7;
    --gray-700: #b3c8d7;
    --gray-600: #c1d5e4;
    --gray-500: #cfe0ed;
    --gray-400: #dbeaf5;
    --gray-300: #e8f2fa;
    --gray-200: #eef2f8;
    --gray-100: #f9fcfe;
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
    --color-success: var(--green-base);
    --color-danger: var(--red-base);
    --color-info: var(--brand-base);
    --color-warning: var(--orange-base);
    --color-transparent: transparent;
    --light-base: var(--white);
    --light-1000: var(--gray-100);
    --light-500: #eff0f1;
    --dark-base: #263238;
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
