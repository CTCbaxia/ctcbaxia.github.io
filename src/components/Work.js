import React from 'react';
import Project from "../components/Project";
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  /* max-width: 700px; */
  /* padding: 4rem; */
`;


const Work = () => (
    <StyledContainer>
        <Project/>
    </StyledContainer>
)


export default Work;