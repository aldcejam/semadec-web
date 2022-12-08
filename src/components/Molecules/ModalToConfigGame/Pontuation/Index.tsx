import { StyledPontuation } from "./Styled"

type PontuationProps = {
    pontuations: Array<{ position: number, score: number }>,
    setPontuations: any
    positionsWithScore: number
}

const Pontuation = ({ pontuations, setPontuations, positionsWithScore }: PontuationProps) => {


    return (
        <StyledPontuation>{
            pontuations.map((pontuation, index) => {
                if (index <= positionsWithScore) {
                    return (
                        <div key={pontuation.position}>
                            <p>{index + 1}º</p>
                            <input type="number" value={pontuation.score} onChange={(e) => {
                                const newPontuations = [...pontuations]
                                newPontuations[index].score = Number(e.target.value)
                                setPontuations(newPontuations)
                            }
                            } />
                        </div>
                    )
                }
            })}
        </StyledPontuation>
    )
}

export default Pontuation