import { SuapAuth } from "../../../../../../pages/api/auth/authSuap";
import { SuapClient } from "../../../../../../services/Login-Suap/client";
import { SuapApiSettings } from "../../../../../../services/Login-Suap/settings";
import { StyledButtonLoginSuap } from "./Styled"

const ButtonLoginSuap = () => {

    const {getLoginURL} = SuapAuth()

    return (
        <StyledButtonLoginSuap>
            <a
                href={getLoginURL() + ""}
                onClick={() => getLoginURL()}
            >
                <p className="icon">suap</p>
            </a>
        </StyledButtonLoginSuap>
    )
}

export default ButtonLoginSuap