import { createGlobalStyle } from 'styled-components';
import { Desktop } from './Responsive';
import React from 'react';

const Style = createGlobalStyle`
	@font-face {
		font-family: 'FireRed';
		src: url('/fonts/fire.ttf');
	}
	:root {
		--yellow: #fed906;
		--text-color: #222;
		--blue: #94b9c9;
		--background: #eee;
		--body: #000;
		--hardBlue: #0C81C2;
	}

	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		max-height: inherit;
		max-width: inherit;
	}
	html,body{
		overflow-x: hidden;
		position: relative;
		font-family: 'Roboto';
		background-color: var(--body);
	}

	a{
		color: var(--text-color);
		text-decoration: none;
	}

	p,span,button,label,input,h1,h2,h3,h4,h5,h6,a{
		color: var(--text-color);
		font-family: 'FireRed';
		word-spacing: 5px;
	}
	img{
		display: block;
		width: 100%;
	}

	button{
		padding: 4px 16px;
		border-radius: 4px;
		${Desktop({
            fontSize: '20px',
        })}
	}

`;

const GlobalStyle = () => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <Style />
        </>
    );
};

export default GlobalStyle;
