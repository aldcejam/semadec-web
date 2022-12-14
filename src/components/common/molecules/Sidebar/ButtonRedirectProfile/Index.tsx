import Link from "next/link"
import { Routes } from "../../../../../Routes"
import ButtonRedirectPerfil from "../../../atoms/Buttons/RedirectPerfil/Index"
import { StyledButtonRedirectProfile } from "./Styled"

const ButtonRedirectProfile = () => {
    return (
        <Link href={Routes.profile} >
            <StyledButtonRedirectProfile>
                <ButtonRedirectPerfil />
                <p>Perfil</p>
            </StyledButtonRedirectProfile>
        </Link>
    )
}

export default ButtonRedirectProfile