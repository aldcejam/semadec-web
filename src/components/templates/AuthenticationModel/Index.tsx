import OptionsLogin from "../../Molecules/AuthenticationModel/OptionsLogin/Index";
import Titles from "../../Molecules/AuthenticationModel/Titles/Index";
import Form from "../../Organisms/AuthenticationModel/Form/Index";
import { StyledAuthenticationTemplate } from "./Styled";


const AuthenticationModel = () => {
    return (
        <StyledAuthenticationTemplate>
            <div className="content">
                <Titles />
                <Form />
                <OptionsLogin />
            </div>
        </StyledAuthenticationTemplate>
    )
}

export default AuthenticationModel