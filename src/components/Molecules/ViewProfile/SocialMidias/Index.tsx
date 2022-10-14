import Image from "next/image"
import { StyledSocialMidias } from "./Styled"


type SocialMidiasProps = {
    instagram: string,
    twitter: string,
}
const SocialMidias = ({instagram, twitter}:SocialMidiasProps) => {
    return (
        <StyledSocialMidias>
            <div className="social-midias--twitter">
                <div className="twitter--icon">
                    <Image src={'/Icons/social-midias/twitter.svg'} layout='fill' />
                </div>
                <p>{twitter}</p>
            </div>
            <div className="social-midias--instagram">
                <div className="instagram--icon">
                    <Image src={'/Icons/social-midias/instagram.svg'} layout='fill' />
                </div>
                <p>{instagram}</p>
            </div>
        </StyledSocialMidias>
    )
}

export default SocialMidias