import { StyledSelectSportButton } from "./Styled"

type SelectSportButtonProps = {
    value: string
    selected: string
}
const SelectSportButton = ({value,selected}: SelectSportButtonProps)=>{
    return(
        <StyledSelectSportButton className={selected}>
            {value}
        </StyledSelectSportButton>
    )
}

export default SelectSportButton