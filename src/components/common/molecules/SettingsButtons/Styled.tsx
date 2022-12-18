import {styled} from "@mui/material/styles";

export const StyledSettingsButtons = styled('div')`
        position: absolute;
        z-index: 10;
        display: flex;
        align-items: flex-start;
        gap: 15px;
        right: 0px;
        top: 20px;
        
        ${(props) => props.theme.breakpoints.down('sm')}{
                top: 30px;
                right: 20px;
        }

        
`