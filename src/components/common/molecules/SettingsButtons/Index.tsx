import ButtonDarkMode from "../../atoms/Buttons/DarkMod/Index"
import SettingButton from "../../atoms/Buttons/Setting/Index"
import { StyledSettingsButtons } from "./Styled"

const SettingsButtons = () => {
    return (
        <StyledSettingsButtons>
            <SettingButton/>
            <ButtonDarkMode/>
        </StyledSettingsButtons>
    )

}
export default SettingsButtons