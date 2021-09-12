import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase'
import {Form} from '../components';
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import * as ROUTES from '../constants/routes'

export default function SignIn() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';

    const handleSignin = (event) => {
        event.preventDefault();

        return firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(()=>{
                history.push(ROUTES.BROWSE)
            })
            .catch((error)=>{
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin}>
                        <Form.Input
                            placeholder="Email or phone no"
                            value = {emailAddress}
                            onChange = {({target}) => setEmailAddress(target.value)}
                        />

                        <Form.Input
                            type = "password"
                            placeholder="Password"
                            autoComplete = "Off"
                            value = {password}
                            onChange = {({target}) => setPassword(target.value)}
                        />

                        <Form.Submit disabled={isInvalid} type="Submit">
                            Sign In
                        </Form.Submit>

                        <Form.CheckboxContainer>
                            <Form.Checkbox type="checkbox"></Form.Checkbox>
                            <Form.CheckboxTextContainer>
                                <Form.CheckboxRemember>Remember me</Form.CheckboxRemember>
                                <Form.CheckboxHelp>Need Help?</Form.CheckboxHelp>
                            </Form.CheckboxTextContainer>
                        </Form.CheckboxContainer>
                       
                            

                        <Form.Text>
                            New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more
                        </Form.TextSmall>

                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}
