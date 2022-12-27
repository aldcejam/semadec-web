import { useState, useEffect } from "react"
import { PontuationsGameProps, DataForGameRegistrationProps } from "../../../../../Types/DataForGameRegistrationProps" 
import SelectPontuations from "../../../atoms/ModalToConfigGame/SelectPontuations/Index"
import Pontuation from "../../../molecules/ModalToConfigGame/Pontuation/Index"

type SelectPontuationProps = {
    dataForRegistration: DataForGameRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DataForGameRegistrationProps>>
}

const PontuationByPosition = ({ dataForRegistration, setDataForRegistration }: SelectPontuationProps) => {
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