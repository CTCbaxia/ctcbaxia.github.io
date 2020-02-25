import React from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

const StyledLayout = styled.div`
    width: 100%;
    .container{
        padding: 0 4rem;
    }
`;

export const Layout = (props) => (
    <StyledLayout>
        <Container>
            {props.children}
        </Container>
    </StyledLayout>
)