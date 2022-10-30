import { styled } from "@mui/material/styles";

export const StyledModalConfigGame = styled("section")`
    position: absolute;
    width: clamp(200px, 100%, 400px);
    max-height: 95vh;
    overflow-y: auto;
    background-color: ${props => props.theme.palette.background.paper}75;
    backdrop-filter: blur(50px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`