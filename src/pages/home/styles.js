
import styled from 'styled-components';

export const Logout = styled.a`
    width: 50%;
    height: 40px;
    margin-left: 160%;
    margin-top: 5%;

    box-shadow: none;
    border: none;
    border-radius: 4px;

    font-weight: 500;
    font-size: 1em;
    

    :focus{
        box-shadow: 0 none;
        outline: none;
    }

    :active{
        background: #4d4d4d;
        color: #fff;
    }
`;

export const BottomContainer = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;