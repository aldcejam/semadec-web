import { Modal } from "@mui/material"
import Image from "next/image";
import { DateForRegistrationProps } from "../../../Types/RegisterGame/TypesDateForRegistration";
import { StyledModalToConfigGame } from "./Styled"

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
                <h2>{dataForRegistration.sport.sportName} - {dataForRegistration.userSelectedCategory}</h2>
                <article>
                    {dataForRegistration.teams.map((team, index) => {
                        return (
                            <div key={index}>
                                {team.teamLogo}
                            </div>
                        )
                    })
                    }
                </article>
            </StyledModalToConfigGame>
        </Modal>
    )
}

export default ModalToConfigGame