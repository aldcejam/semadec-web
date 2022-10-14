import Title from "../../Molecules/ListSports/Title/Index"
import Sports from "../../Organisms/ListSports/Sports/Index"
import { StyledListSports } from "./Styled"

type ListSportsProps = {
    course: string[] | string | undefined,
}
const ListSports = ({ course }: ListSportsProps) => {
    return (
        <StyledListSports>
            <Title title={course}/>
            <Sports/>
        </StyledListSports>
    )
}
export default ListSports