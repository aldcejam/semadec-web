import { Modal } from "@mui/material"
import { StyledModalConfigGame } from "./Styled"

type ModalConfigGameProps = {
    modalIsOpen: boolean,
    ToggleModal: () => void
}
const ModalConfigGame = ({ToggleModal, modalIsOpen}: ModalConfigGameProps) => {
    return (
        <Modal
            keepMounted
            open={modalIsOpen}
            onClose={ToggleModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            BackdropProps={{ sx: { backgroundColor: "divider", backdropFilter: "blur(5px)", outline: "none" } }}
        >
            <StyledModalConfigGame>
                
            </StyledModalConfigGame>
        </Modal>
    )
}

export default ModalConfigGame