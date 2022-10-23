import Modal from '@mui/material/Modal';
import Button from '../../Atoms/ModalSelectCategorys/Button.tsx/Index';
import Categorys from '../../Organisms/ModalSelectCategorys/Categorys/Index';
import GenreOptions from '../../Organisms/ModalSelectCategorys/GenreOptions/Index';
import { StyledBox } from './Styled';
import { dataForSearchBySportCategoriesProps } from "./TypesDataForResearchGame"

type ModalSelectCategorysProps = {
    modalIsOpen: boolean,
    ToggleModal: () => void
    dataForSearchBySportCategories: dataForSearchBySportCategoriesProps,
    setDataForSearchBySportCategories: React.Dispatch<React.SetStateAction<dataForSearchBySportCategoriesProps>>
}


const ModalSelectCategorys = ({ dataForSearchBySportCategories, setDataForSearchBySportCategories, modalIsOpen, ToggleModal }: ModalSelectCategorysProps) => {

    const SelectCategory = (category: string) => {
        setDataForSearchBySportCategories({ ...dataForSearchBySportCategories, userSelectedCategory: category })
    }
    const selectCategoryGenre = (categoryGenre: string) => {
        setDataForSearchBySportCategories({ ...dataForSearchBySportCategories, userSelectedCategoryGenre: categoryGenre })
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
                    <h4>Esporte: {dataForSearchBySportCategories.sport.sportName}</h4>
                    <h5>Selecione as categorias</h5>
                </div>
                {dataForSearchBySportCategories.sport.categorys ?
                    <Categorys
                    dataForSearchBySportCategories={dataForSearchBySportCategories}
                        selectCategory={SelectCategory}
                        categorys={dataForSearchBySportCategories.sport.categorys} /> :
                    ""
                }
                <GenreOptions
                    dataForSearchBySportCategories={dataForSearchBySportCategories}
                    selectCategoryGenre={selectCategoryGenre}
                    categoryGenre={dataForSearchBySportCategories.sport.categoryGenre}
                />

                <Button  dataForSearchBySportCategories={dataForSearchBySportCategories} value="prosseguir" />
            </StyledBox>
        </Modal>
    )
}

export default ModalSelectCategorys