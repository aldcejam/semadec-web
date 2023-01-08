import { styled } from "@mui/material/styles";

export const StyledPageTitle = styled('h1')`
    position: relative;
    display: inline-block;
    font-size: 1.8rem;
    margin: 14px 0 0px;
    color: ${(props) => props.theme.palette.text.primary};
    text-transform: capitalize;
    overflow-x: hidden;
   
    



    ${(props) => props.theme.breakpoints.down('sm')}{
      top: -8px;
      margin: 0;
    }
    ${(props) => props.theme.breakpoints.down('xs')}{
      top: 0px;
      margin-bottom: -5px;
    }

    .subtitle{
      font-size: 1.1rem;
      font-weight: 400;
      margin: 0px;
      text-transform: capitalize;
    }
    

`