import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';

const SignIn = () => {
    const [state, setState] = useState({'email': '', 'password': ''})

    const handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setState({'email': '', 'password': ''});
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setState({ ...state, [name]: value})
    }

    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            label="email"
            value={state.email}
            handleChange={handleChange}
            required
          ></FormInput>
          <FormInput
            name="password"
            label="password"
            type="password"
            value={state.password}
            handleChange={handleChange}
            required
          ></FormInput>

          <ButtonsContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
}

export default SignIn;