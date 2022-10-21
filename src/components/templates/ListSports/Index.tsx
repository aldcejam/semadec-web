import { useState } from "react";
import Title from "../../Molecules/ListSports/Title/Index"
import Sports from "../../Organisms/ListSports/Sports/Index";
import ModalSelectCategorys from "./ModalSelectCategorys/Index";
import { StyledListSports } from "./Styled"
import { dataForResearchGameProps } from "./ModalSelectCategorys/TypesDataForResearchGame"

type ListSportsProps = {
    course: any,
}
const ListSports = ({ course }: ListSportsProps) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [dataForResearch, setDataForResearch] = useState<dataForResearchGameProps>({
        sport: {
            sportName: "",
            categorys: undefined,
            categoryGenre: []
        },
        userSelectedCategory: "",
        userSelectedCategoryGenre: ""
    });

    const ToggleModal = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
    }

    return (
        <StyledListSports>
            <Title title={course} />
            <Sports
                ToggleModal={ToggleModal}
                dataForResearch={dataForResearch}
                setDataForResearch={setDataForResearch}
            />
            <ModalSelectCategorys
                ToggleModal={ToggleModal}
                modalIsOpen={modalIsOpen}
                dataForResearch={dataForResearch}
                setDataForResearch={setDataForResearch}
            />
        </StyledListSports>
    )
}
export default ListSports