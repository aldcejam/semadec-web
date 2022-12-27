import { Modal } from "@mui/material"
import { DataForGameRegistrationProps } from "../../../../Types/DataForGameRegistrationProps"
import { StyledModalToConfigGame } from "./Styled"
import PontuationByPosition from "../../organisms/ModalToConfigGame/PontuationByPosition/Index";
import LogoTeams from "../../molecules/ModalToConfigGame/LogosTeams/Index";
import SituationGame from "../../organisms/ModalToConfigGame/SituationGame/Index";
import CloseIcon from '@mui/icons-material/Close';
import GameDate from "../../organisms/ModalToConfigGame/GameDate/Index";
import { Rajdhani } from '@next/font/google';
import SubmitButton from "../../atoms/SubmitButton.tsx/Index";

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"],
});


type ModalConfigGameProps = {
    modalIsOpen: boolean,
    ToggleModal: () => void,
    dataForRegistration: DataForGameRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DataForGameRegistrationProps>>
}
const ModalToConfigGame = ({ ToggleModal, modalIsOpen, dataForRegistration, setDataForRegistration }: ModalConfigGameProps) => {

    return (
        <Modal
            open={modalIsOpen}
            onClose={ToggleModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            BackdropProps={{ sx: { backgroundColor: "divider", backdropFilter: "blur(5px)", outline: "none", cursor: "pointer" } }}
            className={rajdhani.className}
        >
            <StyledModalToConfigGame>
                <CloseIcon onClick={() => ToggleModal()} className='close-icon' />
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
                        <SituationGame
                            dataForRegistration={dataForRegistration}
                            setDataForRegistration={setDataForRegistration}
                        />
                    </div>
                    <div className="game-date">
                        <GameDate />
                    </div>

                    <div className="create-game-button">
                        <SubmitButton
                            Submit={function ala() { }}
                            value="prosseguir" />
                    </div>
                </div>
            </StyledModalToConfigGame>
        </Modal>
    )
}

export default ModalToConfigGame
