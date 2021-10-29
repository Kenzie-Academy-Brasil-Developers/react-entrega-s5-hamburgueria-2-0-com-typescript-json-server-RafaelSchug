import { styled } from "@mui/system";
import {Card} from '@mui/material'

export const StyledMUICard = styled(Card)`

    border: 2px solid #c6c6c6;
    box-shadow: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    width: 100%;
    min-width: 230px;
    height: 340px;

    .image_wrapper {
        width: 100%;
        height: 150px;
        background: #ececec;
        display: flex;
        justify-content: center;
        align-items: center;

    }


`