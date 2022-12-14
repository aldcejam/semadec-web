import { StylesButtonDarkMode, StylesButtonDarkModeSelect } from "./Styled"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from "../../../../../contexts/ThemeContext";


const ButtonDarkMode = () => {

    const {themeName,themeModifier} = useThemeContext()

    const ToggleTheme = ()=>{
        themeModifier(themeName == 'light' ? 'dark' : 'light')
        localStorage.setItem('@ThemeSemadec', themeName == 'light'? 'dark' : 'light')
        
    }

    return (
        <StylesButtonDarkMode themeselected={themeName} onClick={() => ToggleTheme()}>
            <DarkModeOutlinedIcon className="icon-moon"/>
            <LightModeIcon className="icon-sun"/>
            
            <StylesButtonDarkModeSelect themeselected={themeName}>
            </StylesButtonDarkModeSelect>
        </StylesButtonDarkMode>
    )

}
export default ButtonDarkMode