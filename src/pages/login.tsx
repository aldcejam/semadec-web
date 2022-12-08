import AuthenticationModel from "../components/templates/AuthenticationModel/Index"
import LoginPresentation from "../components/templates/DisplayDecorationLogin/Index"
import { StyledLogin, ContainerLogin } from "../styles/Pages/StyledLogin"


const Login = () => {

    return (
        <ContainerLogin>
            <StyledLogin>
                <LoginPresentation />
                <AuthenticationModel/>
            </StyledLogin>
        </ContainerLogin>

    )
}

export default Login