import { StyedButtonSport } from "./Styled"

type ButtonSportProps = {
    nameButton: string
}
const ButtonSport = ({nameButton}:ButtonSportProps) => {
    return (
        <StyedButtonSport>
            {nameButton}
        </StyedButtonSport>
    )
}

export default ButtonSport