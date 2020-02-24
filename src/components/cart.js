import React from 'react';
import styled from 'styled-components';
import { getPokemonImage } from '../helpers/pokemon';
import { formatMoney } from '../helpers/number';
import Button from './button';

class Cart extends React.Component {
  renderPokemon(pokemon) {
    const { removeFromCart } = this.props;
    const image = getPokemonImage(pokemon.id);
    const xSymbol = '\u2715';

    return (
      <Option>
        <DivUI>
          <Image src={image} />
          <Text>
            <Name>{pokemon.name}</Name>
            <span>{formatMoney(pokemon.price)}</span>
          </Text>
        </DivUI>
        <RemoveButton onClick={() => removeFromCart(pokemon)}>{xSymbol}</RemoveButton>
      </Option>
    )
  }

  render() {
    const { pokemons, sum = 0 } = this.props;

    console.log('sum', sum);
    return (
      <CartView>
        <Wrapper>
          <List>{pokemons.map(pokemon => this.renderPokemon(pokemon))}</List>
          <div>
            <span>valor: {formatMoney(sum)}</span>
            <Button text="finalizar compra" fullSize /> 
          </div>
        </Wrapper>
      </CartView>
    );
  }
}

const CartView = styled.div`
  position: fixed;
  height: 100%;
  width: 30%;
  background-color: #a5a5a5;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 10px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 10px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 4px;
  margin: 5px 0;
`;

const DivUI = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
`;

const Text = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.span`
  font-size: -webkit-xxx-large;
  line-height: 1;
`;

const RemoveButton = styled.button`
  background-color: red;
  border-width: 0px;
  border-radius: 4px;
  height: 35px;
  width: 35px;
`;

const List = styled.div`
  position: relative;
  overflow: auto;
  height: 80%;
  width: 100%;
`;

export default Cart;