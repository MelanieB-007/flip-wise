import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker:wght@400&display=swap');


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Nunito', system-ui;
  }
`;
