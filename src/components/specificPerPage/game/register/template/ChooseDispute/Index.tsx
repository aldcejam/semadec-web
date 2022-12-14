import SubmitButton from "../../../../../common/atoms/SubmitButton.tsx/Index"
import AvailableSports from "../../organisms/AvailableSports/Index"
import AvailableTeams from "../../organisms/AvailableTeams/Index"
import { StyledChooseDispute } from "./Styled"


type ChooseDisputeProps = {
    setDataForRegistration: (data: any) => void
    dataForRegistration: any
    SubmitOpenSelectCategorys: () => void
}

const ChooseDispute = ({dataForRegistration, setDataForRegistration, SubmitOpenSelectCategorys}:ChooseDisputeProps) => {
    return (
        <StyledChooseDispute>
            <AvailableTeams
                setDataForRegistration={setDataForRegistration}
                dataForRegistration={dataForRegistration} />
            <AvailableSports
                setDataForRegistration={setDataForRegistration}
                dataForRegistration={dataForRegistration}
            />
            <SubmitButton
                Submit={SubmitOpenSelectCategorys}
                value="Selecionar categorias" />
        </StyledChooseDispute>
    )
}

export default ChooseDispute