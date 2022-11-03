import { DateForRegistrationProps } from "../../../../Types/RegisterGame/TypesDateForRegistration";
import SituationsButtons from "../../../Molecules/ModalToConfigGame/SituationsButtons/Index"
import { StyledSituationGame } from "./Styled"

type SituationGameProps = {
    dataForRegistration: DateForRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DateForRegistrationProps>>
}
const SituationGame = ({dataForRegistration, setDataForRegistration}:SituationGameProps) => {
    return (
        <StyledSituationGame>
            
            
        </StyledSituationGame>
    )
}

export default SituationGame