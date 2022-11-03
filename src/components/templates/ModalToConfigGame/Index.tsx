import { Modal } from "@mui/material"
import { DateForRegistrationProps } from "../../../Types/RegisterGame/TypesDateForRegistration";
import { StyledModalToConfigGame } from "./Styled"
import Image from "next/image";
import PontuationByPosition from "../../Organisms/ModalToConfigGame/PontuationByPosition/Index";
import LogoTeams from "../../Molecules/ModalToConfigGame/LogosTeams/Index";
import SituationGame from "../../Organisms/ModalToConfigGame/SituationGame/Index";

type ModalConfigGameProps = {
    modalIsOpen: boolean,
    ToggleModal: () => void,
    dataForRegistration: DateForRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DateForRegistrationProps>>
}
const ModalToConfigGame = ({ ToggleModal, modalIsOpen, dataForRegistration, setDataForRegistration }: ModalConfigGameProps) => {


    return (
        <Modal
            keepMounted
            open={modalIsOpen}
            onClose={ToggleModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            BackdropProps={{ sx: { backgroundColor: "divider", backdropFilter: "blur(5px)", outline: "none", cursor: "pointer" } }}
        >
            <StyledModalToConfigGame>
                <h2>{dataForRegistration.sport.sportName} {dataForRegistration.userSelectedCategory ? `- ${dataForRegistration.userSelectedCategory}` : null}</h2>
                <div className="container">
                    <article className="teams">
                        <LogoTeams teams={dataForRegistration.teams} />
                    </article>
                    <div className="pontuations">
                        <PontuationByPosition 
                            dataForRegistration={dataForRegistration}
                            setDataForRegistration={setDataForRegistration}
                        />
                    </div>
                    <div className="situation">
                    </div>
                </div>
            </StyledModalToConfigGame>
        </Modal>
    )
}

export default ModalToConfigGame

/* const removeFirstItemStringNull = () => {
    setDataForRegistration({
      ...dataForRegistration,
      teams: dataForRegistration.teams.filter(team => team.teamName.length !== 0)
    })
  } */