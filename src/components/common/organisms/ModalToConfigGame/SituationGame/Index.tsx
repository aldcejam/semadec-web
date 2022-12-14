import { DataForGameRegistrationProps,gameSituationProps as TypeSituation  } from "../../../../../Types/DataForGameRegistrationProps"; 
import SituationsButton from "../../../molecules/ModalToConfigGame/SituationsButton/Index"
import { StyledSituationGame } from "./Styled"


type SituationGameProps = {
    dataForRegistration: DataForGameRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DataForGameRegistrationProps>>
}
const SituationGame = ({ dataForRegistration, setDataForRegistration }: SituationGameProps) => {

    const Submit = ({gameSituation}: TypeSituation) => {
        setDataForRegistration({
            ...dataForRegistration,
            gameSituation: gameSituation
        })
    }

    const ButtonSelected = ({gameSituation}: TypeSituation)=>{
        if(dataForRegistration.gameSituation == gameSituation){
            return(true)
        }else{
            return(false)
        }
    }

    return (
        <StyledSituationGame>
            <p className="title">Situação do jogo:</p>
            <SituationsButton
                value="em andamento"
                Submit={() => Submit({ gameSituation: "em andamento"})} 
                selected={ButtonSelected({ gameSituation: "em andamento"})}
                />
            <SituationsButton
                value="pré-cadestrado"
                Submit={() => Submit({ gameSituation: "pre-cadastrado"})} 
                selected={ButtonSelected({ gameSituation: "pre-cadastrado"})}
                />

        </StyledSituationGame>
    )
}

export default SituationGame