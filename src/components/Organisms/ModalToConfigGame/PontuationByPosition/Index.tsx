import { useState } from "react"
import { DateForRegistrationProps } from "../../../../Types/RegisterGame/TypesDateForRegistration";
import SelectPontuations from "../../../Atoms/ModalToConfigGame/SelectPontuations/Index"
import Pontuation from "../../../Molecules/ModalToConfigGame/Pontuation/Index"

type SelectPontuationsProps = {
    dataForRegistration: DateForRegistrationProps;
    setDataForRegistration: any
}
const PontuationByPosition = () => {
    const [positionsWithScore, setPositionsWithScore] = useState(3)
    type PositionsProps = {
        position: number,
        score: number
    }
    const [pontuations, setPontuations] = useState<PositionsProps[]>([
        { position: 0, score: 30 },
        { position: 1, score: 0 },
        { position: 2, score: 0 },
        { position: 3, score: 0 },
        { position: 4, score: 0 },
    ])
    return (
        <section>
            <SelectPontuations
                pontuations={pontuations}
                setPontuations={setPontuations}
                positionsWithScore={positionsWithScore}
                setPositionsWithScore={setPositionsWithScore} />
            <Pontuation
                setPontuations={setPontuations}
                pontuations={pontuations}
                positionsWithScore={positionsWithScore}
            />
        </section>
    )
}

export default PontuationByPosition