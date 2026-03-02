import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;

    /* Hier Nunito als globale Basisschrift festlegen */
    font-family: 'Quicksand', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Optional: Standard für Buttons und Inputs, da diese oft Schriften nicht erben */
  button, input, textarea, select {
    font-family: inherit;
  }
`;
