import { styled } from "@mui/system";
import { Box } from "@mui/system";

export const BoxStyled = styled(Box)`
    
    width: 100%;
    max-width: 500px;
    min-width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 2px solid #F5F5F5;
    border-radius: 5px;
    gap: 20px;

    > div {
        width: 100%;
        flex:1;

        label {
            line-height: 30px;
            color: #999999;

        }

        input {
            width: 100%;
            height: 60px;
            padding: 0 14px;
        background: #F5F5F5;

        }
    }

    .top_form {
        display: flex;
        justify-content: space-between;

        a {
            color: #828282;
            text-underline-offset: 2px;
        }
    }


    fieldset {
        border: 2px solid #F5F5F5;
        color: black;

        :active {
        border: 2px solid #F5F5F5;
            
        }
    }

    button {
        width: 100%;
        height: 60px;
        font-weight: bold;
        color: white;
        box-shadow: none;

        :hover {
            background: #93D7AF;
            box-shadow: none;
        }

        :last-child{
            background: #F5F5F5;
            color: #999999;

            :hover {
                background: #828282;
                color: #E0E0E0;
            }
        }
    }



`


