import Title from "../../Molecules/ListSports/Title/Index"
import Sports from "../../Organisms/ListSports/Sports/Index";
import { dataForSearchBySportCategoriesProps } from "../ModalSelectCategorys/TypesDataForResearchGame"
import { StyledListSports } from "./Styled";

type ListSportsProps = {
    course: any,
    ToggleModal: () => void,
    setDataForSearchBySportCategories: React.Dispatch<React.SetStateAction<dataForSearchBySportCategoriesProps>>
}
const ListSports = ({ course,ToggleModal, setDataForSearchBySportCategories }: ListSportsProps) => {

    return (
        <StyledListSports>
            <Title title={course} />
            <Sports
                ToggleModal={ToggleModal}
                setDataForSearchBySportCategories={setDataForSearchBySportCategories}
            />
        </StyledListSports>
    )
}
export default ListSports