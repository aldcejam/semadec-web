import { StyedHoverSportButton } from "./Styled"

type HoverSportButtonProps = {
    nameButton: string
}
const HoverSportButton = ({ nameButton }: HoverSportButtonProps) => {
    return (
        <StyedHoverSportButton>
            <span>
                {nameButton}
            </span>
        </StyedHoverSportButton>
    )
}

export default HoverSportButton