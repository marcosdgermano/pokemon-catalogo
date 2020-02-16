import React from 'react';
import styled from 'styled-components';
import { getPokemonImage } from '../helpers/pokemon';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { pokemon, addToCart } = this.props;

    addToCart(pokemon);
  }

  render() {
    const { pokemon } = this.props;
    const { id, name } = pokemon;
    const image = getPokemonImage(id);

    return (
      <CardWrapper>
        <Image src={image} />
        <Name>{name}</Name>
        <Button onClick={this.handleClick} />
      </CardWrapper>
    );
  }
}

const Button = styled.button`
  height: 50px
`;

const CardWrapper = styled.div`
  height: 300px;
  width: 240px;
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