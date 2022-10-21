import { StyedButtonSport } from "./Styled"

type ButtonSportProps = {
    nameButton: string
}
const ButtonSport = ({ nameButton }: ButtonSportProps) => {
    return (
        <StyedButtonSport>
            <span>
                {nameButton}
            </span>
        </StyedButtonSport>
    )
}

export default ButtonSport