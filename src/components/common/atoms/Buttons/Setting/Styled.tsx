import { styled } from "@mui/material/styles";

export const StyledSettingButton = styled('div')`
       display: flex;
       align-items: center;
       .iconai{
        fill:   ${(props) => props.theme.palette.text.primary};
        cursor: pointer;
}
       
`