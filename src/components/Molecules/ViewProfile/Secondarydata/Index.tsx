import Image from "next/image"
import { useState } from "react"
import { StyledSecondarydata } from "./Styled"

type SecondarydataProps = {
    academicEmail: string,
    personalcEmail: string
}
const Secondarydata = ({academicEmail, personalcEmail}:SecondarydataProps) => {
    const [buttonMoreInformations, setButtonMoreInformations] = useState(false)

    const toggleButtonMoreInformations = () => {
        buttonMoreInformations ? setButtonMoreInformations(false) : setButtonMoreInformations(true)
    }
    return (
        <StyledSecondarydata>
            <div
                className="secondary-informations__more-information-button"
                onClick={() => toggleButtonMoreInformations()}
            >
                <div className={`angle-botton--icon ${buttonMoreInformations ? "rotate-angle-button" : ""}`}>
                    <Image src={'/Icons/angle-botton.svg'} layout='fill' />
                </div>
                <p>Mais Informação</p>
            </div>
            <div
                className={`${buttonMoreInformations ? "active-informations" : ""} secondary-informations__informations`}
            >
                <div className="informations--academic-email">
                    <strong>email acadêmico:</strong> <span>{academicEmail}</span>
                </div>
                <div className="informations--personal-mail">
                    <strong> email pessoal:</strong> <span>{personalcEmail}</span>
                </div>
            </div>
        </StyledSecondarydata>
    )
}

export default Secondarydata