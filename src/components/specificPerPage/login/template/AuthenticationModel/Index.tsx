import OptionsLogin from "../../molecules/AuthenticationModel/OptionsLogin/Index";
import Titles from "../../molecules/AuthenticationModel/Titles/Index";
import Form from "../../organisms/AuthenticationModel/Form/Index";
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