
import styled from 'styled-components';
export const Logout = styled.button`
    width: 50%;
    height: 40px;
    margin-left: 145%;
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
        background: #006400;
    }
`;
export const BottomContainer = styled.div`
    height: 10%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;