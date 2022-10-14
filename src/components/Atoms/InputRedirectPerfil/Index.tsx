import Image from "next/image"
import { StyledInputRedirectPerfil } from "./Styled"

export const InputRedirectPerfil = () => {
    return (
        <>

            <StyledInputRedirectPerfil>
                    <div className="image">
                        <Image src={'/profile-image.jpg'} layout='fill' />
                    </div>
                    <div className="mask">
                        <Image src={'/format/hexagono.png'} layout='fill' />
                    </div>
            </StyledInputRedirectPerfil>
        </>
    )
}

