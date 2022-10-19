import Modal from '@mui/material/Modal';
import Button from '../../../Atoms/ListSports/Button.tsx/Index';
import Categorys from '../../../Organisms/ListSports/Categorys/Index';
import GenreOptions from '../../../Organisms/ListSports/GenreOptions/Index';
import { StyledBox } from './Styled';
import {dataForResearch} from "./Types"

type ModalSelectCategorysProps = dataForResearch &{
    modalIsOpen: boolean,
    ToggleModal: () => void
    setDataForResearch: React.Dispatch<React.SetStateAction<{
        sport: {
            sportName: string,
            categorys: string[] | undefined,
            categoryGenre: string[]
        }
        userSelectedCategory: string,
        userSelectedCategoryGenre: string

    }>>
}


const ModalSelectCategorys = ({ dataForResearch, setDataForResearch ,modalIsOpen, ToggleModal }: ModalSelectCategorysProps) => {
    
    const SelectCategory = (category: string) => {
        setDataForResearch({...dataForResearch, userSelectedCategory: category})
        console.log(dataForResearch)
    }
    const selectCategoryGenre = (categoryGenre: string) => {
        setDataForResearch({...dataForResearch, userSelectedCategoryGenre: categoryGenre})
        console.log(dataForResearch)
    }

    return (
        <Modal
            keepMounted
            open={modalIsOpen}
            onClose={ToggleModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            BackdropProps={{ sx: { backgroundColor: "divider", backdropFilter: "blur(5px)" } }}
        >
            <StyledBox>
                <h4>{dataForResearch.sport.sportName}</h4>
                <h5>Selecione as categorias</h5>
                {dataForResearch.sport.categorys ?
                    <Categorys 
                    selectCategory={SelectCategory}
                    categorys={dataForResearch.sport.categorys} /> :
                    ""
                }
                <GenreOptions 
                selectCategoryGenre={selectCategoryGenre}
                categoryGenre={dataForResearch.sport.categoryGenre} />

                <Button dataForResearch={dataForResearch} value="proceguir"/>
            </StyledBox>
        </Modal>
    )
}

export default ModalSelectCategorys