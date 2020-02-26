import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body{
        font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.0rem;
        padding: 0rem 2rem;
        @media only screen and (max-width: 768px) {
            padding: 0rem;
        }
    }

`;

export const Layout = (props) => (
    <React.Fragment>
        <GlobalStyle />
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
)