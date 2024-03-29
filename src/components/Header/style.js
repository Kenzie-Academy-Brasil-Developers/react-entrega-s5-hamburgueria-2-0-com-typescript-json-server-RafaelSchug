import styled from 'styled-components';
import { styled as styledMUI }  from '@mui/system';
import Box from '@mui/material/Box';
import {  alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

  
 export const SearchIconWrapper = styledMUI("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
 export const Search = styledMUI("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  
 export const StyledInputBase = styledMUI(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

export const StyledBox = styledMUI(Box)`

    border-radius: 5px;
    border: unset;
    background: #fff;

    .box_header {
        width: 100%;
        min-height: 54px;
        background: #27AE60;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        margin-top: -1px;
        border-radius: 5px 5px 0px 0px;
        
        span {
            cursor: pointer;
        }

        h4 span {
            text-transform: capitalize;
        }
    }

    .box_body {
        padding: 20px;
        padding-bottom: 0;
        background: #fff;
        max-height: 45vh;
        overflow: auto;
        position: relative;
        margin: 10px 0;
    }

    .box_footer {
        button {
            width: 100%;
            background: #E0E0E0;
            color: white;
            font-weight: bold;
            box-shadow: unset;

            :hover {
                background: #828282;
            }
        }
    }
`

export const CartCard = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
    
    .image_content {
        background: #d9d9d9;
        width: 82px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;

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
        display: flex;
        align-self: flex-start;
        justify-content: center;
        cursor: pointer;
        color: #BDBDBD;

        :hover {
        color: #9e9e9e;
        }
    }

`

export const EmptyCart = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 10px;
    padding: 30px 0;

    h3 {
        font-family: 'Inter';
    }

    p {
        font-family: 'Inter';
        font-weight: 300;
    }

`

export const TotalContainer = styled.div`

    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;

    h3:first-child {
        font-weight: 600;
        font-size: 14px;
    }

    h3:last-child {
        font-weight: 600;
        font-size: 14px;
        color: #636363;
    }


`