import Image from "next/image"
import Link from "next/link"
import { RedirecticonStyled } from "./Styled"

type RedirectIconProps = {
    icon: string
    text: string
    href: string
} 

const RedirectIcon = ({ href,icon,text }:RedirectIconProps) => {
    return (
        <Link href={href}>
            <RedirecticonStyled>
                <div className="image">
                    <Image src={icon} layout={"fill"} />
                </div>
                <p>{text}</p>
            </RedirecticonStyled>
        </Link>
    )
}

export default RedirectIcon