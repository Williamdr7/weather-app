import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&display=swap');
        font-family: 'Mulish', sans-serif;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        font-family: 'Mulish', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.primary.one};
        overflow: hidden;
    }

    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.primary.one};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary.two}; 
      border: 1px solid transparent;
      background-clip: padding-box;  
      border-radius: 8px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px ${({ theme }) =>
          theme.colors.primary.two} inset !important;
    }

    input:-webkit-autofill{
      -webkit-text-fill-color: ${({ theme }) =>
        theme.colors.secondary.two} !important;
    }   

    ::-webkit-scrollbar-thumb:hover {
      background: rgb(43, 50, 50);
    }

`;

export default GlobalStyle;
