import Image from "next/image"
import { StyledButtonRedirectPerfil } from "./Styled"

const ButtonRedirectPerfil = () => {
    return (
        <StyledButtonRedirectPerfil>
            <div className="image">
                <Image alt="imagem do perfil" src={'/profile-image.jpg'} fill />
            </div>
            <div className="mask">
                <Image alt="decoração ao redor da imagem" src={'/format/hexagono.png'} fill />
            </div>
        </StyledButtonRedirectPerfil>
    )
}

export default ButtonRedirectPerfil

