import React from 'react';
import styled from 'styled-components';
import { getPokemonImage } from '../helpers/pokemon';

class Card extends React.Component {
  render() {
    const { id, name } = this.props.pokemon;
    const image = getPokemonImage(id);

    return (
      <CardWrapper>
        <Image src={image} />
        <Name>{name}</Name>
      </CardWrapper>
    );
  }
}

const CardWrapper = styled.div`
  height: 320px;
  width: 260px;
  border: 1px #000 solid;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;

`;

const Image = styled.img`
  height: 60%;
  width: 80%;
  align-self: center;
`;

const Name = styled.span`
  font-size: -webkit-xxx-large;
`;

export default Card;