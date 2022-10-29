import Modal from '@mui/material/Modal';
import SubmitButton from '../../Atoms/SubmitButton.tsx/Index';
import Categorys from '../../Organisms/ModalSelectCategorys/Categorys/Index';
import GenreOptions from '../../Organisms/ModalSelectCategorys/GenreOptions/Index';
import { StyledBox } from './Styled';
import { dataForSearchBySportCategoriesProps } from "./TypesDataForResearchGame"
import { toast } from "react-toastify";


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

    const VerifyIfCategoriesIsSelected = (redirectUrl: string) => {
        if (!dataForSearchBySportCategories.userSelectedCategoryGenre) {
            toast.error("Selecione uma categoria de gênero para continuar");
        }
        else if (dataForSearchBySportCategories.sport.categorys && !dataForSearchBySportCategories.userSelectedCategory) {
            toast.error("Selecione uma categoria do esporte para continuar");
        }
        else {
            window.location.href = redirectUrl;
        }
    }
    const Submit = () => {
        const category = dataForSearchBySportCategories.userSelectedCategory
        const categoryGenre = dataForSearchBySportCategories.userSelectedCategoryGenre
        const sportSelected = dataForSearchBySportCategories.sport.sportName
        const RedirectUrl = `games?${category ? `category=${category}&` : ""}${categoryGenre ? `categoryGenre=${categoryGenre}&` : ""}${sportSelected ? `sportSelected=${sportSelected}` : ""}`

        VerifyIfCategoriesIsSelected(RedirectUrl)


    }

    return (
        <Modal
            keepMounted
            open={modalIsOpen}
            onClose={ToggleModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            BackdropProps={{ sx: { backgroundColor: "divider", backdropFilter: "blur(5px)", outline: "none" } }}
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

                <SubmitButton
                    Submit={Submit}
                    value="prosseguir" />
            </StyledBox>
        </Modal>
    )
}

export default ModalSelectCategorys