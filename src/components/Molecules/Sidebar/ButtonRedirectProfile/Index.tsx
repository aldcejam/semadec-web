import Link from "next/link"
import { StringsRoutes } from "../../../../StringsRoutes"
import ButtonRedirectPerfil from "../../../Atoms/Buttons/RedirectPerfil/Index"
import { StyledButtonRedirectProfile } from "./Styled"

const ButtonRedirectProfile = () => {
    return (
        <Link href={StringsRoutes.profile} >
            <StyledButtonRedirectProfile>
                <ButtonRedirectPerfil />
                <p>Perfil</p>
            </StyledButtonRedirectProfile>
        </Link>
    )
}

export default ButtonRedirectProfile