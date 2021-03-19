import {InputGroupContainer, InputContainer, InputLabelContainer} from './custom-input.styles';

const CustomInput = ({handleChange, label, ...otherprops}) => (
   <InputGroupContainer>
        <InputContainer onChange={handleChange}  {...otherprops}/>
        {
            label ? (<InputLabelContainer value={otherprops.value} className='form-input-label'>{label}</InputLabelContainer>): null
        }
   </InputGroupContainer>
   
)

export default CustomInput;