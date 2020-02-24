import React from 'react';
import styled from 'styled-components';

export default ({ text, fullSize, onClick }) => ((
    <ButtonUI fullSize={fullSize} onClick={onClick}>
      <TextUI>
        {text}
      </TextUI>
    </ButtonUI>
));

const TextUI = styled.span`
  white-space: nowrap;
  color: #fff;
  display: block;
  font-size: ${({ textSize }) => `${textSize}px`};
`;

const ButtonUI = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border-width: 0px;
  border-radius: 4px;
  min-width: 50px;
  padding: 15px 15px;;
  ${({ fullSize }) => fullSize && `width: 100%`};
`;