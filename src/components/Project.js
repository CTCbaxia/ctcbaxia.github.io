import React from "react";
import {CardDeck, Card, Button} from 'react-bootstrap';
import { Link } from "gatsby";
import styled from 'styled-components';

//Image
import solidThumbnail from "../assets/solid-thumbnail.gif";
import meetingAgendaThumbnail from "../assets/meeting-agenda-thumbnail.png";
import affectiveComputingThumbnail from "../assets/affective-computing-thumbnail.png";
import augmentedRealityThumbnail from "../assets/augmented-reality-thumbnail.jpg";

const StyledContainer = styled.div`
  .card{
    margin: 1rem; 
    border:0px solid rgba(0,0,0,.01);
    border-radius: 20px; 
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1); 
  }

  .card-img{
    border-radius: 20px 20px 0 0;
  }

  a{
    text-decoration: none;
    color: black;
  }
`;

const Project = () => (
    <StyledContainer>
        <CardDeck>
        <Card>
            <Link to="/about">
                <Card.Img src={solidThumbnail} />
                <Card.Body>
                    <Card.Title>Solid - Information Visualization</Card.Title>
                    <Card.Text>
                    Solid is a visualization system used by journalists to compare disparity between real health statistics and the corresponding media coverage.
                    </Card.Text>
                    {/* <Button variant="light">Learn More</Button> */}
                </Card.Body>
            </Link>
        </Card>
        <Card>
            <Link to="/about">
            <Card.Img src={meetingAgendaThumbnail}/>
            <Card.Body>
                <Card.Title>Meeting Agenda22</Card.Title>
                <Card.Text>
                Meeting Agenda is an online system that assists students to arrange their schedule and meetings in teamwork.
                </Card.Text>
                {/* <Button variant="light">Learn More</Button> */}
            </Card.Body>
            </Link>
        </Card>
        </CardDeck>
        <CardDeck>
        <Card>
            <Card.Img src={augmentedRealityThumbnail} />
            <Card.Body>
                <Card.Title>Augmented Reality Research</Card.Title>
                <Card.Text>
                An eye-gaze classification study involving Microsoft Hololens to investigate how different mindsets in AR contexts can impact people’s ability to perceive gaze direction.
                </Card.Text>
                {/* <Button variant="light">Learn More</Button> */}
            </Card.Body>
        </Card>
        <Card>
            <Card.Img src={affectiveComputingThumbnail}/>
            <Card.Body>
                <Card.Title>Engagement Recognition Model</Card.Title>
                <Card.Text>
                The study was designed to detect the engagement of users during online video chatting by analyzing human postures and body motion data using emotion recognition system.
                </Card.Text>
                {/* <Button variant="light">Learn More</Button> */}
            </Card.Body>
        </Card>
        </CardDeck>
    </StyledContainer>
);

export default Project;