import { styled } from "@mui/system";
import { Box } from "@mui/system";

export const BoxStyled = styled(Box)`
    
    width: 100%;
    max-width: 400px;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 1px solid #ccc;
    gap: 20px;

    > div, input {
        width: 100%;
        flex:1;
    }

    .top_form {
        display: flex;
        justify-content: space-between;
    }

    button {
        width: 100%;
        color: white;
    }

`


