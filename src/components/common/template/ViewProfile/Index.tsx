import { memo } from "react"
import Losango from "../../../../../public/format/losango"
import Content from "../../organisms/ViewProfile/Content/Index"
import { StyledViewProfile } from "./Styled"

type TypesViewProfileComponent = {
    screen: 'profileUser' | 'viewFriend'
}

const ViewProfileComponent = ({ screen }: TypesViewProfileComponent) => {
    return (
        <StyledViewProfile>
            <Losango />
            <Content/>
        </StyledViewProfile>

    )
}

export const ViewProfile = memo(ViewProfileComponent)