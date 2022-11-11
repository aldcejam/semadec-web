import { StyledSituationsButtons } from "./Styled"

type SituationsButtonsProps = {
    Submit: () => void
    value: "pré-cadestrado" | "Em andamento"
    selected: boolean
}
const SituationsButtons = ({ Submit, value,selected}: SituationsButtonsProps) => {
    return(
        <StyledSituationsButtons className={`selected-${selected.toString()}`}>
            {value}
        </StyledSituationsButtons>
    )
}

export default SituationsButtons