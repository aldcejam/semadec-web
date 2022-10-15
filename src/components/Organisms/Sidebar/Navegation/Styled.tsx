import styled from "@mui/material/styles/styled";

export const StyledNavegation = styled("nav")`
  .container {
    position: absolute;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100px;
    bottom: 0;
    padding: 0 0 0 15px;
    gap: 30px;

    .item:nth-of-type(1) {
      position: relative;
      width: 90%;
      &::after{
        content: "";
        position: absolute;
        width: 110%;
        height: 2px;
        bottom: -16px;
        left: -2px;
        background: ${(props) => props.theme.palette.background.default};
        
      }
        margin-left: -7px;
    }
  }
`;
