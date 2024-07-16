import styled from 'styled-components';
import Palette from '../styles/Palette';
import PropTypes from 'prop-types';
import '../styles/slideFromBottom.css';

const FullPageModal = ({id, children}) => {
  return (
      <FullPageModalWrapper id={id} popover='auto'>{children}</FullPageModalWrapper>
  );
};

const FullPageModalWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 87vh;
  padding-top: 2.2564rem;
  padding-left: 1.2307rem;
  padding-right: 1.2307rem;
  position: fixed;
  top: 11vh;
  font-size: 0.95rem;
  border-radius: 5vw;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(231, 233, 242, 0.7);
  
`;
export default FullPageModal;
  