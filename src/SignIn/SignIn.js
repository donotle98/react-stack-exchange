import React from 'react';
import styled from 'styled-components';

const SignIn = () => {
    return (
        <StyledWrapper>
            <div>
                <h1>Stack Overflow</h1>
                <form>
                    <input type='text' placeholder='Username...'></input>
                    <input type='text' placeholder='Password...'></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </StyledWrapper>
    );
};

export default SignIn;
