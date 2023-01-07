import Image from "next/image"
import { StyledButtonRedirectPerfil } from "./Styled"

const ButtonRedirectPerfil = () => {
    return (
        <StyledButtonRedirectPerfil>
            <div className="image">
                <Image 
                alt="imagem do perfil"
                src={'/profile-image.jpg'} 
                fill 
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                />
            </div>
            <div className="mask">
                <Image 
                    alt="decoração ao redor da imagem" 
                    src={'/format/hexagono.png'} 
                    fill
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"/>
            </div>
        </StyledButtonRedirectPerfil>
    )
}

export default ButtonRedirectPerfil

