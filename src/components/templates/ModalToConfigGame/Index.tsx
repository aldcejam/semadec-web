import { Modal } from "@mui/material"
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
                <h2>{dataForRegistration.sport.sportName}</h2>
            </StyledModalToConfigGame>
        </Modal>
    )
}

export default ModalToConfigGame