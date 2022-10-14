import { styled } from "@mui/material";

export const StyledSettingsButtons = styled('div')`
        position: absolute;
        display: flex;
        align-items: center;
        gap: 15px;
        right: 10px;
        
        ${(props) => props.theme.breakpoints.down('sm')}{
                top: 32px;
                right: 20px;
        }
        ${(props) => props.theme.breakpoints.down('xs')}{
                top: 22px;
                
  }
        
`