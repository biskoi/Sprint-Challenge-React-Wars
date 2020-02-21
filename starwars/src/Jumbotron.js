import React from 'react';
import { Jumbotron as ReactJumbotron, Button } from 'reactstrap';
import styled from 'styled-components';

const Jumbotron = styled(ReactJumbotron)`
background: none;
background-color: rgba(255, 215, 183, 0.644);
padding: 3% 0;
margin: 0;
`;

const JumboTron = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Star Wars Characters</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
      </Jumbotron>
    </div>
  );
};

export default JumboTron;