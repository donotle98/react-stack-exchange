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

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        color: #f48023;
        padding: 1rem;
    }

    form {
        background-color: white;
        border: solid 2px #f48023;
        display: flex;
        flex-direction: column;
        width: 20rem;
        justify-content: center;
        align-items: center;
        padding: 1rem;

        input {
            margin-bottom: 1rem;
        }
    }
`;
