import React from 'react';
import { Jumbotron as ReactJumbotron } from 'reactstrap';
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
        <p className="lead">Hi Star Wars fans, look below for some information on your favourite characters!</p>
      </Jumbotron>
    </div>
  );
};

export default JumboTron;