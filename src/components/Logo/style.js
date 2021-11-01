import styled from 'styled-components';

export const Container = styled.div`

    margin-right: 20px;
    cursor: pointer;
    transition: .2s linear;

    :hover {
        filter: saturate(2.5);
        transform: scale(1.02);
    }

    img {
        width: 150px;
    }

    @media screen and (max-width: 500px){
        display: none;
    }

`