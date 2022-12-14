import { useState } from "react";
import TopSegment from "../../molecules/ModifyUserData/TopSegment/Index";
import Form from "../../organisms/ModifyUserData/Form/Index";
import { StyledModifyUserData } from "./Styled";

const ModifyUserData = () => {
    const [isOpenComponentPersonaData, setIsOpenComponentPersonaData] = useState(false)
    const ToggleComponentPersonaData = () => {
        isOpenComponentPersonaData ? setIsOpenComponentPersonaData(false) :
            setIsOpenComponentPersonaData(true)
    }

    return (
        <StyledModifyUserData className={`is-open-component-${isOpenComponentPersonaData.toString()}`}>
            <TopSegment
                ToggleComponentPersonaData={ToggleComponentPersonaData}
                isOpenComponentPersonaData={isOpenComponentPersonaData}
            />
            <Form />
        </StyledModifyUserData>
    );
};

export default ModifyUserData;
