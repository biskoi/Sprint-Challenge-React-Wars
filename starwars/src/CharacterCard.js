import React from 'react';
import {
  Card as ReactCard, CardImg, CardText as Text, CardBody, CardLink as Link,
  CardTitle as Title, CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';

const Card = styled(ReactCard)`
width: 30%;
background-color: rgba(255, 172, 104, 0.89);
margin: 1% 1%;

    @media (max-width: 600px) {
        width: 80%;
    }

`;

const CardTitle = styled(Title)`
font-size: 1.6rem;
`;

const CardText = styled(Text)`
margin: 0;
`;

const CardLink = styled(Link)`
color: rgb(245, 74, 51);
`;

const CharacterCard = props => {

    console.log('char' + props);
    const character = props.character;

  return (
        console.log(props),
          <Card>
            <CardBody>
                <CardTitle>{character.name}, ID #{props.id}</CardTitle>
                <CardText>Born on: {character.birth_year}</CardText>
                <CardText>Owns {character.starships.length} starships and {character.vehicles.length} vehicles.</CardText>
                <CardText>Weighs {character.mass}kg, and is {character.height}cm tall.</CardText>
                <CardText>Has {character.eye_color} eyes and {character.hair_color !== 'n/a' ? character.hair_color : 'no'} hair.</CardText>
                <CardLink href = {character.url}>View on swa.pi</CardLink>
            </CardBody>
          </Card>

      );

    
};

export default CharacterCard;