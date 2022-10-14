import Image from "next/image"
import { memo, useState } from "react"
import Losango from "../../../../public/format/losango"
import ProfilePic from "../../Atoms/ProfilePic/Index"
import Identity from "../../Molecules/ViewProfile/IdentityData/Index"
import Secondarydata from "../../Molecules/ViewProfile/Secondarydata/Index"
import SocialMidias from "../../Molecules/ViewProfile/SocialMidias/Index"
import Content from "../../Organisms/ViewProfile/Content/Index"
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