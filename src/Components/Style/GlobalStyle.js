import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	html {
		box-sizing: border-box;
	}

	*, *::before, *::after {
		box-sizing: inherit;
	}

	* {
		margin: 0;
		padding: 0;
	}

	body {
		position: relative;
		background: rgba(255, 255, 255);
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		line-height: 1.2;
		font-weight: 400;
		color: #000;
	}

	@media (min-width: 768px) and (max-width: 1023px) {
		.contact_active {
			font-size: 20px;
		}
		.contact_active-wrap {
			padding-top: 10px;
			max-width: 350px;
		}
	}

	@media (min-width: 1024px) and (max-width: 1365px) {
		.contact_active {
			font-size: 20px;
		}
		.contact_active-wrap {
			padding-top: 10px;
			max-width: 400px;
		}
	}

	@media (min-width: 1366px) {
		.contact_active {
			font-size: 25px;
		}
		.contact_active-wrap {
			padding-top: 10px;
			max-width: 400px;
		}
	}
`;