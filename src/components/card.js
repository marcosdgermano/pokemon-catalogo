import React from 'react';
import styled from 'styled-components';
import { getPokemonImage } from '../helpers/pokemon';
import { formatMoney } from '../helpers/number';
import Button from './button';

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
    const { id, name, price } = pokemon;
    const image = getPokemonImage(id);

    return (
      <CardWrapper>
        <Image src={image} />
        <Name>{name}</Name>
        <span>{formatMoney(price)}</span>
        <Button text="add to cart" onClick={this.handleClick} />
      </CardWrapper>
    );
  }
}

const CardWrapper = styled.div`
  height: 300px;
  width: 240px;
  border: 1px #000 solid;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  padding: 10px;
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