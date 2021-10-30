import styled from 'styled-components';
import { styled as styledMUI }  from '@mui/system';
import Box from '@mui/material/Box';


export const StyledBox = styledMUI(Box)`

    overflow: hidden;
    border-radius: 5px;
    border: unset;

    .box_header {
        width: 100%;
        height: 40px;
        background: #27AE60;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;

        span {
            cursor: pointer;
        }
    }

    .box_body {
        padding: 20px;
        background: #fff;
    }
`

export const CartCard = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    

    .image_content {
        background: #d9d9d9;
        width: 82px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;

        img {
            width: 60px;
            height: 100%;
            object-fit: contain;
        }
    }

    .item_information {
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 3;

        .item_control {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }

    .button_content {
        flex: 1;
        align-self: flex-start;
    }

`

export const EmptyCart = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 10px;

    h3 {
        font-family: 'Inter';
    }

    p {
        font-family: 'Inter';
        font-weight: 300;
    }

`