import {createGlobalStyle} from 'styled-components'

const GlobalStyled = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
}

html, body, #root{
min-width:100vw;
min-height: 100vh;
font-size: 16px;
-webkit-font-smooting: antialiased;
text-rendering: optimizeLegibility;
}

body{
    /* background-color: blueviolet; */
    font-family: "Roboto", sans-serif;
    background: rgba(255, 255, 255, 1);
}
`
export default GlobalStyled;