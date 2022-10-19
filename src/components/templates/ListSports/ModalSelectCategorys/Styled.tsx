import { styled } from "@mui/material/styles";

export const StyledBox = styled("section")`
    position: absolute;
    width: clamp(200px, 100%, 400px);
    max-height: 100vh;
    overflow-y: auto;
    background-color: ${props => props.theme.palette.background.paper}75;
    backdrop-filter: blur(50px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    border-radius: ${props => props.theme.shape.borderRadius};
    border-bottom: 2px solid ${props => props.theme.palette.secondary.main};
    border-right: 2px solid ${props => props.theme.palette.secondary.main};
    border-left: 2px solid ${props => props.theme.palette.primary.main};
    border-top: 2px solid ${props => props.theme.palette.primary.main};
    display: grid;
    gap: 20px;


`
