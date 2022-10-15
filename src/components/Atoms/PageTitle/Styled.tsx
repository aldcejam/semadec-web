import {styled} from "@mui/material/styles";

export const StyledPageTitle = styled('h1')`
    position: relative;
    display: inline-block;
    font-size: 1.7rem;
    margin: 0 0 10px 0;
    color: ${(props)=> props.theme.palette.text.primary};
    text-transform: capitalize;
    overflow-x: hidden;
    ${(props) => props.theme.breakpoints.down('xs')}{
    left: 12px;
  }

    &:before{
        content: "";
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 100%;
        background: ${(props)=> props.theme.palette.background.default};
    }
    

`