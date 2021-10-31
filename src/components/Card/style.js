import { styled } from "@mui/system";
import {Card} from '@mui/material'

export const StyledMUICard = styled(Card)`

    border: 2px solid #E0E0E0;
    box-shadow: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    width: 100%;
    min-width: 230px;
    height: 340px;
    transition: .2s linear;

    button {
        height: 40px;
        font-weight: bold;
        box-shadow: unset;
        background: #BDBDBD;
    }

    :hover {
        border-color: #27AE60;

        button {
            background: #27AE60;

            :hover {
                background: #93D7AF;
                box-shadow: unset;
            }
        }
    }

    .ProductCardHeader {
        width: 100%;
        height: 150px;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .ProductCardMain {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        flex: 1;
        padding: 10px 20px;

        
        
    }

    


`