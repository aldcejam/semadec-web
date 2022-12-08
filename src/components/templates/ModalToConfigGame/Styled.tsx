import { styled } from "@mui/material/styles";

export const StyledModalToConfigGame = styled("section")`
  position: absolute;
  width: clamp(200px, 96vw, 700px);
  max-height: 95vh;
  min-height: 95vh;
  overflow-y: auto;
  background-color: ${(props) => props.theme.palette.background.paper}75;
  backdrop-filter: blur(50px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 30px 30px;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  border-bottom: 2px solid ${(props) => props.theme.palette.secondary.main};
  border-right: 2px solid ${(props) => props.theme.palette.secondary.main};
  border-left: 2px solid ${(props) => props.theme.palette.primary.main};
  border-top: 2px solid ${(props) => props.theme.palette.primary.main};
  h2 {
    font-size: clamp(1.4em, 3vw, 2.3rem);
    text-align: center;
    margin: 10px 0 20px;
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: 600;
    text-transform: capitalize;
  }

  .container {
    display: grid;
    grid-template:
      "teams teams"
      "positions situation"
      / 1fr 1fr;
      margin-top: 20px;
      gap: 50px;
      
      ${props => props.theme.breakpoints.down("sm")}{
      grid-template:
        "teams teams"
        "positions positions"
        "situation situation"
        / 1fr 1fr;

    }

    .teams{
      grid-area: teams;
    }
    
    .situation {
      grid-area: situation;
    }
  }

  .pontuations{
      grid-area: positions;

  }
`;
