import { DataForGameResearchProps } from "../../../../../../Types/DataForGameResearchProps";
import Sports from "../../organisms/Sports/Index";

import { StyledListSports } from "./Styled";

type ListSportsProps = {
    course: any,
    ToggleModal: () => void,
    setDataForSearchBySportCategories: React.Dispatch<React.SetStateAction<DataForGameResearchProps>>
}
const ListSports = ({ course,ToggleModal, setDataForSearchBySportCategories }: ListSportsProps) => {

    return (
        <StyledListSports>
            <Sports
                ToggleModal={ToggleModal}
                setDataForSearchBySportCategories={setDataForSearchBySportCategories}
            />
        </StyledListSports>
    )
}
export default ListSports