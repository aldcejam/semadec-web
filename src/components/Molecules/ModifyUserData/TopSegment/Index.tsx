import AngleBotton from "../../../../../public/format/Angle-botton"
import Vector from "../../../../../public/format/Vector"
import { StyledTopSegment } from "./Styled"

type TopSegmentProps = {
    isOpenComponentPersonaData: boolean;
    ToggleComponentPersonaData: () => void;
}
const TopSegment = ({ToggleComponentPersonaData, isOpenComponentPersonaData}: TopSegmentProps) => {

    return (
        <StyledTopSegment>
            <Vector />
            <div className="expand-area-click"
                onClick={() => ToggleComponentPersonaData()}>
                <div className={`complement-icon is-open-component-${isOpenComponentPersonaData.toString()}`}>
                    <AngleBotton />
                </div>
            </div>
        </StyledTopSegment>
    )
}

export default TopSegment