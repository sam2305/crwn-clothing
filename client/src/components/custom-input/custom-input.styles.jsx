import styled, {css} from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

const applyShrinkCSS = ({ value }) => {
    return value.length ? shrinkLabelStyles : ''
}

export const InputGroupContainer = styled.div`
    position: relative;
    margin: 45px 0;
    input[type='password'] {
        letter-spacing: 0.3em;
    }
`
export const InputContainer = styled.input`
    background: none;
    background-color: white;
    color: $sub-color;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;

    &:focus {
        outline: none;
    }

    &:focus ~ .form-input-label {
        ${shrinkLabelStyles}
    }
`

export const InputLabelContainer = styled.label`
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${applyShrinkCSS}
`