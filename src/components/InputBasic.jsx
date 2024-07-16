import styled from 'styled-components';
import Palette from '../styles/Palette';
import PropTypes from 'prop-types';

const InputBasic = (props) => {
  return (
    <InputWrapper width={props.width}>
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
        pattern = {props.type == 'tel' ? '[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}' : '.*'}
        title = {props.title}
        required={props.required}
      />
    </InputWrapper>
  );
};

InputBasic.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.number,
  searchIcon: PropTypes.bool,
  editInput: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

const InputWrapper = ({width, children}) => {
  const Temp = styled.div`
  width: ${width};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
  return (
    <Temp>{children}</Temp>
  )
}
  

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
  /* padding-left: 1rem; */
  text-align: center;
  

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
