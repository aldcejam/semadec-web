import { styled } from "@mui/material/styles";

export const StyledModalToConfigGame = styled("section")`
    position: absolute;
    width: clamp(200px, 100%, 800px);
    max-height: 95vh;
    min-height: 95vh;
    overflow-y: auto;
    background-color: ${props => props.theme.palette.background.paper}75;
    backdrop-filter: blur(50px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 30px 30px;
    border-radius: ${props => props.theme.shape.borderRadius};
    border-bottom: 2px solid ${props => props.theme.palette.secondary.main};
    border-right: 2px solid ${props => props.theme.palette.secondary.main};
    border-left: 2px solid ${props => props.theme.palette.primary.main};
    border-top: 2px solid ${props => props.theme.palette.primary.main};

    h2 {
        font-size: 1.4em;
        text-align: center;
        margin: 0 0 20px;
        color: ${props => props.theme.palette.text.primary};
        font-weight: 600;
        text-transform: capitalize;
    }
`