import ButtonDarkMode from "../../atoms/Buttons/DarkMod/Index"
import SettingButton from "../../atoms/SettingButton/Index"
import { StyledSettingsButtons } from "./Styled"

const SettingsButtons = () => {
    return (
        <StyledSettingsButtons>
            <ButtonDarkMode/>
            <SettingButton/>
        </StyledSettingsButtons>
    )

}
export default SettingsButtons