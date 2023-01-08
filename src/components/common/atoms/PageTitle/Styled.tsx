import { styled } from "@mui/material/styles";

export const StyledPageTitle = styled('h1')`
    position: relative;
    display: inline-block;
    font-size: 1.8rem;
    margin: 0px;
    color: ${(props) => props.theme.palette.text.primary};
    text-transform: capitalize;
    overflow-x: hidden;

    .subtitle{
      font-size: 1.1rem;
      font-weight: 400;
      margin: 0px;
      text-transform: capitalize;
    }
    

`