import styled from 'styled-components';
import Palette from '../styles/Palette';
import PropTypes from 'prop-types';

const InputBasic = (props) => {
  return (
    <InputWrapper>
      {props.searchIcon && <SearchIcon className="bi bi-search"></SearchIcon>}
      <InputStyle
        text={props.text}
        placeholder={props.text}
        style={{ height: `${props.height}rem` }}
        className={
          (props.searchIcon ? 'search ' : '') +
          (props.editInput ? 'editInput' : '')
        }
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
    </InputWrapper>
  );
};

InputBasic.propTypes = {
  text: PropTypes.string,
  height: PropTypes.number,
  searchIcon: PropTypes.bool,
  editInput: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled.i`
  position: relative;
  left: 1.7rem;
`;

const InputStyle = styled.input`
  width: 100%;
  height: 3.5rem;

  background: ${Palette.BodyPrimary};
  border: 1px solid ${Palette.InputBorder};
  border-radius: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  padding-left: 1rem;

  &::placeholder {
    color: ${Palette.InputBorder};
  }

  &.search {
    &::placeholder {
      padding-left: 1.2rem;
    }
  }
  &.editInput {
    &::placeholder {
      color: ${Palette.TextPrimary};
    }
  }
`;

export default InputBasic;
