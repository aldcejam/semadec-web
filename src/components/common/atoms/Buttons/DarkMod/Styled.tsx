import {styled} from "@mui/material/styles";

type themeselected = {
  themeselected: any
}

export const StylesButtonDarkMode = styled("div")<themeselected>(({ themeselected, ...props }) => `
  position: relative;
  z-index: 10;
  width: 57px;
  height: 22px;
  display: flex;
  align-items: center;
  background: ${props.theme.palette.background.default};
  border:solid 1px ${props.theme.palette.primary.contrastText};
  border-radius: 100px;
  cursor: pointer;

  .icon-moon{
    position:absolute;
    font-size: 1.1rem;
    z-index:10;
    left: 6px;
    color:  ${themeselected == "light" ? "#000;" : "#fff"};
  }
  .icon-sun{
    position:absolute;
    font-size: 1rem;
    ${themeselected == "light" ? "right: 6.5px;" : "right: 4px;"}
    z-index:10;
  }
  `);
export const StylesButtonDarkModeSelect = styled("div")<themeselected>(({ themeselected, ...props }) => `
  position: absolute;
  width: 32px;
  height: 32px;
  background: ${props.theme.palette.background.paper};
  border:solid 1px ${props.theme.palette.primary.contrastText};
  border-radius: 100px; 
  transform: translate(${themeselected == "light" ? "24px" : "-1px"});
  transition: 0.3s;
  
  `)