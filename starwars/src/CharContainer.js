import React, { useState, useEffect } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';
import styled from "styled-components";

const Flexbox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
        margin: 3% 0;
    }

`;

export default function CharContainer(props) {

    const [people, setPeople] = useState([])

    useEffect(() => {
        Axios.get(`https://swapi.co/api/people/`)
        .then(res => {setPeople(res.data.results)})
        .catch(err => {alert('Fetch failed. ' + err)})
        console.log('API called.');
      }, [])

  return (
    <Flexbox>
      {people.map((item, index) => {
      return <CharacterCard character = {item} id = {index}/>;
      })}
    </Flexbox>
  );
}
