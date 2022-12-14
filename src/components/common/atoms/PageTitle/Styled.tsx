import { styled } from "@mui/material/styles";

export const StyledPageTitle = styled('h1')`
    position: relative;
    display: inline-block;
    font-size: 1.8rem;
    margin: 0 0 10px 0;
    color: ${(props) => props.theme.palette.text.primary};
    text-transform: capitalize;
    overflow-x: hidden;
    ${(props) => props.theme.breakpoints.down('xs')}{
    
  }

    .subtitle{
      font-size: 1.1rem;
      font-weight: 400;
      text-transform: capitalize;
    }
    

`