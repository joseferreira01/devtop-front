
import styled from 'styled-components';

export const Register = styled.button`
    width: 50%;
    height: 40px;
    margin-left: 16%;
    margin-top: 5%;

    box-shadow: none;
    border: none;

    background: red;
    border-radius: 4px;

    font-weight: 500;
    font-size: 1em;

    :focus{
        box-shadow: 0 none;
        outline: none;
    }

    :active{
        background: #fff;
    }
`;
