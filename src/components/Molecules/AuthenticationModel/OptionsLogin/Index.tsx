import ButtonLoginGoogle from "../../../Atoms/Buttons/Login/Google/Index"
import ButtonLoginSuap from "../../../Atoms/Buttons/Login/Suap/Index"
import { StyledOptionsLogin } from "./Styled"

const OptionsLogin = () => {
    return (
        <StyledOptionsLogin>
            <div className="title">
                <p>Conecte-se com:</p>
            </div>
            <div className="account-options">
                <ButtonLoginGoogle/>
                <ButtonLoginSuap/>
            </div>
        </StyledOptionsLogin>
    )
}

export default OptionsLogin