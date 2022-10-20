import Modal from '@mui/material/Modal';
import Button from '../../../Atoms/ListSports/ModalSelectCategorys/Button.tsx/Index';
import Categorys from '../../../Organisms/ListSports/ModalSelectCategorys/Categorys/Index';
import GenreOptions from '../../../Organisms/ListSports/ModalSelectCategorys/GenreOptions/Index';
import { StyledBox } from './Styled';
import { dataForResearchProps } from "./TypesDataForResearch"

type ModalSelectCategorysProps = {
    modalIsOpen: boolean,
    ToggleModal: () => void
    dataForResearch: dataForResearchProps,
    setDataForResearch: React.Dispatch<React.SetStateAction<dataForResearchProps>>
}


const ModalSelectCategorys = ({ dataForResearch, setDataForResearch, modalIsOpen, ToggleModal }: ModalSelectCategorysProps) => {

    const SelectCategory = (category: string) => {
        setDataForResearch({ ...dataForResearch, userSelectedCategory: category })
    }
    const selectCategoryGenre = (categoryGenre: string) => {
        setDataForResearch({ ...dataForResearch, userSelectedCategoryGenre: categoryGenre })
    }

    return (
        <Modal
            keepMounted
            open={modalIsOpen}
            onClose={ToggleModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            BackdropProps={{ sx: { backgroundColor: "divider", backdropFilter: "blur(5px)", outline:"none"} }}
        >
            <StyledBox>
                <div className="titles">
                    <h4>Esporte: {dataForResearch.sport.sportName}</h4>
                    <h5>Selecione as categorias</h5>
                </div>
                {dataForResearch.sport.categorys ?
                    <Categorys
                        selectCategory={SelectCategory}
                        categorys={dataForResearch.sport.categorys} /> :
                    ""
                }
                <GenreOptions
                    dataForResearch={dataForResearch}
                    selectCategoryGenre={selectCategoryGenre}
                    categoryGenre={dataForResearch.sport.categoryGenre}
                />

                <Button dataForResearch={dataForResearch} value="proceguir" />
            </StyledBox>
        </Modal>
    )
}

export default ModalSelectCategorys