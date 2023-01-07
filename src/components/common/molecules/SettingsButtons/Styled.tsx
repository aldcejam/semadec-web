import {styled} from "@mui/material/styles";

export const StyledSettingsButtons = styled('div')`
        display: flex;
        align-items: flex-start;
        gap: 15px;
        margin-top: 20px;
        
        ${(props) => props.theme.breakpoints.down('sm')}{
                margin-top: 30px;
                margin-right: 20px;
        }

        
`