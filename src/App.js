import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [input, setInput] = useState('');
    const [pagesize, setPagesize] = useState(5);
    const [filter, setFilter] = useState('javascript');

    const token = localStorage.getItem('token');

    const handleSubmit = () => {
        localStorage.setItem('token', 'hellomyfriend');
    };

    const getQuestions = async () => {
        const res = await fetch(
            `https://api.stackexchange.com/2.2/questions?page=1&pagesize=5&todate=1613692800&order=desc&min=1613692800&sort=activity&tagged=${filter}&site=stackoverflow`
        );

        const data = await res.json();

        if (!data) {
            console.log('no data available');
        }

        setQuestions(data.items);
    };

    const handleFilterChange = () => {};

    useEffect(() => {
        getQuestions();
    }, [filter]);

    return (
        <div>
            <StyledWrapper>
                {!token ? (
                    <div>
                        <h1>Stack Overflow</h1>
                        <form onSubmit={() => handleSubmit()}>
                            <input
                                type='text'
                                placeholder='Username...'
                            ></input>
                            <input
                                type='text'
                                placeholder='Password...'
                            ></input>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                ) : (
                    <div className='questions'>
                        <div>
                            <div>
                                <input
                                    type='text'
                                    placeholder='Change question filter'
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                ></input>
                                <button
                                    onClick={() => {
                                        setFilter(input);
                                        setInput('');
                                    }}
                                >
                                    Filter
                                </button>
                            </div>
                            <span>Filter by: {filter} Tag</span>
                        </div>
                        {questions ? (
                            questions.map((question, index) => {
                                return (
                                    <div className='each-question' key={index}>
                                        <span className='views'>
                                            {question.views
                                                ? question.views
                                                : '0'}{' '}
                                            Views
                                        </span>
                                        <span className='answers'>
                                            {question.answer_count
                                                ? question.answer_count
                                                : '0'}{' '}
                                            Answers
                                        </span>
                                        <span className='title'>
                                            {question.title}
                                        </span>
                                    </div>
                                );
                            })
                        ) : (
                            <span>No questions with that tag</span>
                        )}
                    </div>
                )}
            </StyledWrapper>
        </div>
    );
};

export default App;

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

    .questions {
        background-color: white;
        padding: 0.5rem;
        margin-top: 1rem;
        border: solid 2px #f48023;
        width: 80%;
    }

    .each-question {
        display: flex;
        align-items: center;
        margin-bottom: 4rem;
        margin-top: 3rem;
        text-align: left;
        border: solid 2px #bdc2c5;
        padding: 0.5rem;
        height: 4rem;
        .views {
            border: solid 1px black;
            padding: 0.5rem;
        }

        .answers {
            border: solid 1px black;
            padding: 0.5rem;
            margin-right: 0.5rem;
        }

        .title {
            width: auto;
            word-wrap: break-word;
        }
    }
`;
