import React from 'react';
import Project from "../components/Project";
import styled from 'styled-components';

const StyledContainer = styled.div`
  /* position: relative; */
    padding: 0rem 4rem;
    @media only screen and (max-width: 960px) {
        padding: 0rem 0rem;
    }
    @media only screen and (max-width: 575px) {
        padding: 0rem 1rem;
    }
`;

const Work = () => (
    <StyledContainer>
        <Project/>
    </StyledContainer>
)

export default Work;