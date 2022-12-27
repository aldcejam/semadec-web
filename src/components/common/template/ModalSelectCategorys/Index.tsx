import Modal from '@mui/material/Modal';
import SubmitButton from '../../atoms/SubmitButton.tsx/Index';
import Categorys from '../../organisms/ModalSelectCaregorys/Categorys/Index';
import GenreOptions from '../../organisms/ModalSelectCaregorys/GenreOptions/Index';
import { StyledModalSelectCategorys } from './Styled';
import { DataForGameResearchProps } from "../../../../Types/DataForGameResearchProps"
import { DataForGameRegistrationProps } from "../../../../Types/DataForGameRegistrationProps";
import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import { Rajdhani } from '@next/font/google';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
});

type ModalSelectCategorysProps = {
    modalIsOpen: boolean,
    ToggleModal: () => void
    data: DataForGameResearchProps | DataForGameRegistrationProps
    setdata: any
    Submit: () => void
}

const ModalSelectCategorys = ({ data, setdata, modalIsOpen, ToggleModal, Submit }: ModalSelectCategorysProps) => {

    const SelectCategory = (category: string) => {
        setdata({ ...data, userSelectedCategory: category })
    }
    const selectCategoryGenre = (categoryGenre: string) => {
        setdata({ ...data, userSelectedCategoryGenre: categoryGenre })
    }


    const VerifyIfCategoriesIsSelected = () => {
        if (!data.userSelectedCategoryGenre) {
            toast.error("Selecione uma categoria de gênero para continuar");
        }
        else if (data.sport.categorys && !data.userSelectedCategory) {
            toast.error("Selecione uma categoria do esporte para continuar");
        }
        else {
            Submit()
        }
    }
    

    return (
        <Modal
            keepMounted
            open={modalIsOpen}
            onClose={ToggleModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            BackdropProps={{ sx: { backgroundColor: "divider", backdropFilter: "blur(5px)", outline: "none" } }}
            className={rajdhani.className}
        >
            <StyledModalSelectCategorys>
                <CloseIcon onClick={()=> ToggleModal()} className='close-icon'/>
                <div className="titles">
                    <h4>Esporte: {data.sport.sportName}</h4>
                    <h5>Selecione as categorias</h5>
                </div>
                {data.sport.categorys ?
                    <Categorys
                        dataForSearchBySportCategories={data}
                        selectCategory={SelectCategory}
                        categorys={data.sport.categorys} /> :
                    ""
                }
                <GenreOptions
                    dataForSearchBySportCategories={data}
                    selectCategoryGenre={selectCategoryGenre}
                    categoryGenre={data.sport.categoryGenre}
                />

                <SubmitButton
                    Submit={VerifyIfCategoriesIsSelected}
                    value="prosseguir" />
            </StyledModalSelectCategorys>
        </Modal>
    )
}

export default ModalSelectCategorys