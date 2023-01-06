import { SuapAuth } from "../../../../../../pages/api/auth/authSuap";
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