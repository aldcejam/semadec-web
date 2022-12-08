import {styled} from "@mui/material/styles";


export const StyledHomePageCard = styled("article")`
  position: relative;
  width: 100%;
  height: 100%;
  border: solid 2px ${(props) => props.theme.palette.primary.contrastText};
  border-radius: ${props => props.theme.shape.borderRadius}px;
  overflow: hidden;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.3s border-color;

  ${(props) => props.theme.breakpoints.down("sm")} {
    border-radius: ${props => props.theme.shape.borderRadius}px;
  }
  &::before {
    z-index: 1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(5px);
      border-radius: ${props => props.theme.shape.borderRadius}px;
      ${(props) => props.theme.breakpoints.down("sm")} {
        border-radius: ${props => props.theme.shape.borderRadius}px;
      }
    }
    
  &:hover{
    border: 2px solid ${(props) => props.theme.palette.primary.main};

  }
  .illustration {
    .assign-color{
      fill: ${(props) => props.theme.palette.primary.main};
    }
  }
`;
