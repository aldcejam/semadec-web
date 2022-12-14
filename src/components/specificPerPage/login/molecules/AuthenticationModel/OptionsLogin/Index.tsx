import ButtonLoginGoogle from "../../../../../common/atoms/Buttons/Login/Google/Index"
import ButtonLoginSuap from "../../../../../common/atoms/Buttons/Login/Suap/Index"
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