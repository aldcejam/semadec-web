import {styled} from "@mui/material/styles";

export const StyledSituationsButtons = styled("button")`
    width: min(100%, 230px);
    padding: 15px 10px;
    text-align: left;
    font-weight: bold;
    font-size: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    background-color: ${({theme}) => theme.palette.primary.dark}c9;
    :hover{
        background-color: ${({theme}) => theme.palette.primary.dark}e9;
    }
    transition: 0.3s;
    border: 1px solid ${({theme}) => theme.palette.primary.dark};
    color: ${({theme}) => theme.palette.primary.light};
    border-radius: ${({theme}) => theme.shape.borderRadius};

    &.selected-true{
        background: ${({theme}) => theme.palette.background.default};
    }

`