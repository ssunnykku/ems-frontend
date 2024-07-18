import styled from 'styled-components';
import Palette from '../styles/Palette';
import PropTypes from 'prop-types';

const Card = ({children, align='center'}) => {
  const CardWrapper = styled.div`
    display: flex;
    align-items: ${align};
    flex-direction: column;
  
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
    padding: 1.8461rem 1.23rem;
    font-size: 0.95rem;
    border-radius: 5vw;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(231, 233, 242, 0.7);
  `;


  return (
      <CardWrapper>{children}</CardWrapper>
  );
};

export default Card;
  