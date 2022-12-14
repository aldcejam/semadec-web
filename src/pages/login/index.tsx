import AuthenticationModel from "../../components/specificPerPage/login/template/AuthenticationModel/Index"
import LoginPresentation from "../../components/specificPerPage/login/template/DisplayDecorationLogin/Index"
import { StyledLogin, ContainerLogin } from "../../styles/Pages/StyledLogin"


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