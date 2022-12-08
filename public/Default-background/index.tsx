
import { BottomLeft } from "./shapes/bottom-left"
import { BottomRight } from "./shapes/bottom-right"
import { TopLeft } from "./shapes/top-left"
import { TopRight } from "./shapes/top-right"
import { StyledBackgroundPage, ContainerBackgroundPage} from "./Styled"

const DefaultBackground = () => {
    return (
        <ContainerBackgroundPage>
            <StyledBackgroundPage>
                <TopLeft/>
                <TopRight/>
                <BottomRight/>
                <BottomLeft/>
            </StyledBackgroundPage>
        </ContainerBackgroundPage>

    )
}

export default DefaultBackground
