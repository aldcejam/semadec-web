import { styled } from "@mui/material/styles";

export const StyledSettingsButtons = styled("div")`
  display: flex;
  align-items: center;
  gap: 15px;

  ${(props) => props.theme.breakpoints.down("xs")} {
  
        margin-top: -68px;

  }
`;
