import { styled } from "@mui/material";

export const StyledButtonRedirectProfile = styled('div')`
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    
    p {
      color: ${(props) => props.theme.palette.text.primary};
      font-weight: bold;
      font-size: 1.1rem;
    }
`