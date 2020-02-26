import React from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import themes from '../theme-context';
import { fetchPokemonsBytype } from '../redux/actions/pokemon';
import Grid from '../containers/grid';
import Cart from '../containers/cart';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPokemonsBytype(this.props.brand);
  }

  render () {
    const { brand } = this.props;

    return (
      <ThemeProvider theme={themes[brand]}>
        <Wrapper>
          <GridWrapper>
            <Grid />
          </GridWrapper>
          <CartWrapper>
            <Cart />
          </CartWrapper>
        </Wrapper>
      </ThemeProvider>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
`;

const GridWrapper = styled.div`
  width: 70%;
  background-color: ${props => props.theme.terciary};
`;

const CartWrapper = styled.div``;

export default connect(null, { fetchPokemonsBytype })(App);