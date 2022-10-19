import { styled } from "@mui/material/styles";

export const StyledButton = styled("div")`
    display: flex;
    justify-content: center;
    width: 100%;
    div{
    position: relative;
    width: 140px;
    display: flex;
    justify-content: center;
    &:after{
        content: "";
        position: absolute;
        top:0;
        left:0;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        background: ${props => props.theme.palette.background.default};
        border-radius: 8px;
    }
    button{
        cursor: pointer;
        position: relative;
        width: 100%;
        z-index: 10;
        left: 2px;
        top: 2px;
        padding: 10px 0;
        border: 0px;
        background-color: ${props => props.theme.palette.background.paper}c4;
        border-radius: 8px;
        color: ${props => props.theme.palette.text.primary};
        text-transform: capitalize;
        font-size: 1rem;
        font-weight: 600;
        transition: all 0.3s ease;

        &:hover{
            background-color: ${props => props.theme.palette.background.paper};
        }
    }
    }
`