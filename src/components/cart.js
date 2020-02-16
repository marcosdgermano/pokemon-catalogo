import React from 'react';
import styled from 'styled-components';
import { getPokemonImage } from '../helpers/pokemon';

class Cart extends React.Component {
  renderPokemon(pokemon) {
    const image = getPokemonImage(pokemon.id);

    return (
      <Option>
        <Image src={image} />
        <Name>{pokemon.name}</Name>
      </Option>
    )
  }

  render() {
    const { pokemons } = this.props;

    return <div>{pokemons.map(pokemon => this.renderPokemon(pokemon))}</div>;
  }
}

const Option = styled.div`
  height: 100px;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
`;

const Name = styled.span`
  font-size: -webkit-xxx-large;
`;

export default Cart;