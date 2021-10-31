import styled from 'styled-components';


export const MainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: reverse;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    max-width: 1200px;
    margin: 0 auto;
    gap: 30px;
    padding: 50px;

    @media screen and (max-width: 800px){
        padding: 10px;
        align-items: flex-start;
        gap: 10px;
    }

`
export const ChildContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    &.right_container {
        width: 100%;
    }

    @media screen and (max-width: 800px){
        flex: unset;
    }

`