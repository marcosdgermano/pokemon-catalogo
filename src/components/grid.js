import React from 'react';
import styled from 'styled-components';
import Card from '../containers/card';

class Grid extends React.Component {
  render() {
    const { pokemons = {} } = this.props;

    return (
      <GridWrapper>
        {pokemons.map(pokemon => (
          <CardWrapper key={pokemon.id}>
            <Card pokemon={pokemon} />
          </CardWrapper>
        ))}
      </GridWrapper>
    );
  }
}

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  margin: 0 5px 10px;
`;

export default Grid;