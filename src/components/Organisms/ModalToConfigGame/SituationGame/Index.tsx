import { DateForRegistrationProps } from "../../../../Types/RegisterGame/TypesDateForRegistration";
import SituationsButtons from "../../../Molecules/ModalToConfigGame/SituationsButtons/Index"
import { StyledSituationGame } from "./Styled"

type SituationGameProps = {
    dataForRegistration: DateForRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DateForRegistrationProps>>
}
const SituationGame = ({ dataForRegistration, setDataForRegistration }: SituationGameProps) => {

    const Submit = (situation: string) => {
        setDataForRegistration({
            ...dataForRegistration,
            gameSituation: situation
        })
    }

    const ButtonSelected = (situation: string)=>{
        if(dataForRegistration.gameSituation == situation){
            return(true)
        }else{
            return(false)
            
        }
    }

    return (
        <StyledSituationGame>
            <SituationsButtons
                value="Em andamento"
                Submit={() => Submit("Em andamento")} 
                selected={true}
                />
            <SituationsButtons
                value="pré-cadestrado"
                Submit={() => Submit("Em andamento")} 
                selected={ButtonSelected("pré-cadestrado")}
                />

        </StyledSituationGame>
    )
}

export default SituationGame