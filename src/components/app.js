import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchPokemons } from '../redux/actions/pokemon';
import Grid from '../containers/grid';
import Cart from '../containers/cart';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  render () {
    return (
      <Wrapper>
        <GridWrapper>
          <Grid />
        </GridWrapper>
        <CartWrapper>
          <Cart />
        </CartWrapper>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
`;

const GridWrapper = styled.div`
  width: 70%;
  background-color: blue;
`;

const CartWrapper = styled.div``;

export default connect(null, { fetchPokemons })(App);