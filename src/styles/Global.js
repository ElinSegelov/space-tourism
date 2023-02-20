import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
  box-sizing: border-box;
	text-decoration: none;
  font-family: 'Bellefair', serif;
}

body {
	line-height: 1;
	background-color: ${({theme}) => theme.colors.dark};
	color: ${({theme}) => theme.colors.secondaryText};
	max-height: 100vh;
	max-width: 100vh;
}

h1, h2, h3, h4, h5 {
  text-transform: uppercase;

}
h1 {
	font-size: 80px;
	margin: 2rem auto 3rem;
	font-weight: 500;
}

h2 {
	font-size: 80px;
}

h3 {
	font-size: 24px;
}

h4 {
	font-size: 32px;
}

h5 {
	font-family: 'Barlow Condensed', sans-serif;
	font-size: 16px;
}

p {
	font-family: 'Barlow Condensed', sans-serif;
	color: ${({theme}) => theme.colors.primaryText};
	font-size: 16px;
	line-height: 25px;
	letter-spacing: 2px;
	font-weight: 300;
}

@media(min-width: 600px) {
	.active {
		border-bottom: 3px solid white;
	}
}

@media(min-width: 1200px) {
	p {
		font-size: 18px;
	}
}
`

export default GlobalStyles