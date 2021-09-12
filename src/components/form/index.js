import React from 'react';
import {Container, Base, Error, Text, TextSmall, Input, Submit, Title, Link, CheckboxContainer, Checkbox, CheckboxHelp, CheckboxRemember, CheckboxTextContainer} from './styles/form'

export default function Form({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Form.Error = function FormError({children, ...restProps}){
    return <Error {...restProps}>{children}</Error>
}

Form.Base = function FormBase({children, ...restProps}){
    return <Base {...restProps}>{children}</Base>
}

Form.Title = function FormTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Form.Text = function FormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall({children, ...restProps}){
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Link = function FormLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Form.Input = function FormInput({children, ...restProps}){
    return <Input {...restProps}>{children}</Input>
}

Form.Submit = function FormSubmit({children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>
}

Form.CheckboxContainer = function FormCheckboxContainer({children, ...restProps}){
    return <CheckboxContainer {...restProps}>{children}</CheckboxContainer>
}

Form.Checkbox = function FormCheckbox({children, ...restProps}){
    return <Checkbox {...restProps}>{children}</Checkbox>
}

Form.CheckboxTextContainer = function FormCheckboxTextContainer({children, ...restProps}){
    return <CheckboxTextContainer {...restProps}>{children}</CheckboxTextContainer>
}

Form.CheckboxRemember = function FormCheckboxRemember({children, ...restProps}){
    return <CheckboxRemember {...restProps}>{children}</CheckboxRemember>
}

Form.CheckboxHelp = function FormCheckboxHelp({children, ...restProps}){
    return <CheckboxHelp {...restProps}>{children}</CheckboxHelp>
}