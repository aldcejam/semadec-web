"use client"

import {styled} from "@mui/material/styles";

interface IStyledSidebar {
  menuisactive: string
}

export const StyledSidebar = styled("nav")<IStyledSidebar>(({ menuisactive, ...props }) => `
  width: ${menuisactive == 'true' ? '150px' : '50px'};
  height: 90vh;
  display: flex;
  position: fixed;
  z-index: 99;
  margin: auto;
  border-radius: ${props.theme.shape.borderRadius}px;
  background-color: ${props.theme.palette.background.paper};
  transition: 0.5s;
  overflow-x: hidden;

  .redirect-home{
    position: absolute;
    top: 30%;
    left: 13px;
  }
  
  ${props.theme.breakpoints.down('sm')}{
    height: 100vh;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  /*  */
  ${props.theme.breakpoints.down('xs')}{  
    width: 150px;
    left: ${menuisactive == 'true' ? '0px' : '-150px'};
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    border-radius: ${props.theme.shape.borderRadius}px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    z-index: -1;
    box-shadow: ${props.theme.shadows[1]};
    /*  */
    ${props.theme.breakpoints.down('sm')}{
      box-shadow: ${props.theme.shadows[2]};
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  `);

