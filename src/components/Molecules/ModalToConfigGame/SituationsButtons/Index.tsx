import { StyledSituationsButtons } from "./Styled"

type SituationsButtonsProps = {
    Submit: () => void
    value: string
}
const SituationsButtons = ({ Submit, value}: SituationsButtonsProps) => {
    return(
        <StyledSituationsButtons>
            {value}
        </StyledSituationsButtons>
    )
}

export default SituationsButtons