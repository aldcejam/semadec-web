import Link from "next/link"
import { InputRedirectPerfil } from "../../../Atoms/InputRedirectPerfil/Index"
import { StyledButtonRedirectProfile } from "./Styled"

type ButtonRedirectProfileProps = {
    href: string
}

const ButtonRedirectProfile = ({}:ButtonRedirectProfileProps) => {
    return (
        <Link href={'/profile'} >
            <StyledButtonRedirectProfile>
                <InputRedirectPerfil />
                <p>Perfil</p>
            </StyledButtonRedirectProfile>
        </Link>
    )
}

export default ButtonRedirectProfile