import { DataForGameResearchProps } from "../../../Types/DataForGameResearchProps";
import Title from "../../Molecules/ListSports/Title/Index"
import Sports from "../../Organisms/ListSports/Sports/Index";

import { StyledListSports } from "./Styled";

type ListSportsProps = {
    course: any,
    ToggleModal: () => void,
    setDataForSearchBySportCategories: React.Dispatch<React.SetStateAction<DataForGameResearchProps>>
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