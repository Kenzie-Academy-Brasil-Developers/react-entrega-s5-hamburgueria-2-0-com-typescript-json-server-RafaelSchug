import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    max-width: 400px;
    min-width: 230px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;

    .logo_title {
        font-weight: bold;
        color: #ff1900;
        text-align: left;
        font-size: 22px;

        span {
            color: #000;
            font-size: 32px;
        }
    }

    .content_container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
        padding: 15px;
        border: 1px solid #c3c3c3;
        border-radius: 5px;
    }

    .icon_content {
        padding: 20px;
        background: #d6d6d6;
        display: inline-block;  
        color: #27AE60;      
    }

    .text_content {
        max-width: 300px;
        font-size: 17px;
        text-align: left;
    }

`