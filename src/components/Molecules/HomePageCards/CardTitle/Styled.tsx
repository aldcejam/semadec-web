import { styled } from "@mui/system";

export const StyledCardTitle = styled('div')`
    position: absolute;
    z-index: 10;
    margin: 20px;
    h2 {
      margin: 0;
      color: ${(props) => props.theme.palette.text.primary};
      font-size: 1.3rem;
    }
    h3 {
      margin: 0;
      color: ${(props) => props.theme.palette.text.secondary}d5;
      font-size: 0.7rem;
    }       


`