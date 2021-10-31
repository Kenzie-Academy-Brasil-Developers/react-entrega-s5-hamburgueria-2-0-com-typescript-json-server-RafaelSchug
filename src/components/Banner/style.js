import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    max-width: 400px;
    min-width: 230px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;

    .logo {
        display: flex;
        justify-content: flex-start;
        
        img {
            width:100%;
        }
    }

    .content_container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        padding: 15px;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
    }

    .icon_content {
        width: 60px;
        height: 60px;
        padding: 20px;
        border-radius: 5px;
        background: #27ae601a;
        display: inline-block;  
        color: #27AE60;      
    }

    .text_content {
        max-width: 260px;
        font-size: 14px;
        text-align: left;
        color: #828282;

        span {
            color: black;
            font-weight:600;
        }
    }

    .circles_content {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        max-width: 180px;
        
        .circle {
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background: #F2F2F2;
        }
    }

`