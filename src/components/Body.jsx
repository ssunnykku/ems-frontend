import styled from 'styled-components';
import Palette from '../styles/Palette';
import PropTypes from 'prop-types';

const Body = ({children}) => {
  return (
      <BodyWrapper>{children}</BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  height: 78vh;
  overflow-y: auto;
  background-color: #F8F8F8;
  padding-top: 1.641rem;
  padding-left: 1.0256rem;
  padding-right: 1.0256rem;
  
`;
export default Body;
