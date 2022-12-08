import { useState, useEffect } from "react"
import { DateForRegistrationProps, PontuationsGameProps } from "../../../../Types/RegisterGame/TypesDateForRegistration";
import SelectPontuations from "../../../Atoms/ModalToConfigGame/SelectPontuations/Index"
import Pontuation from "../../../Molecules/ModalToConfigGame/Pontuation/Index"

type SelectPontuationsProps = {
    dataForRegistration: DateForRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DateForRegistrationProps>>
}

const PontuationByPosition = ({ dataForRegistration, setDataForRegistration }: SelectPontuationsProps) => {
    const [positionsWithScore, setPositionsWithScore] = useState(2)

    const [pontuations, setPontuations] = useState<PontuationsGameProps[]>([
        { position: 0, score: 30 },
        { position: 1, score: 0 },
        { position: 2, score: 0 },
        { position: 3, score: 0 },
        { position: 4, score: 0 },
    ])

    useEffect(() => {
        setDataForRegistration({
            ...dataForRegistration,
            pontuationsGame: pontuations
        })
    }, [positionsWithScore, pontuations])


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