import { StyledSituationsButton } from "./Styled"

type SituationsButtonProps = {
    Submit: () => void
    value: "pré-cadestrado" | "em andamento"
    selected: boolean
}
const SituationsButton = ({ Submit, value, selected }: SituationsButtonProps) => {
    return (
        <StyledSituationsButton 
        onClick={()=>Submit()}
        className={`selected-${selected.toString()}`}>
            <div className="content">
                <div className={`ball ${value == "em andamento" ? "blue-ball-illustration" : "blue-green-illustration"}`} />
                <p>
                    {value}
                </p>
            </div>
        </StyledSituationsButton>
    )
}

export default SituationsButton