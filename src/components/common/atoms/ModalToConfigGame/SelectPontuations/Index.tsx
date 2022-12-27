import { StyledSelectPontuations } from "./Styled"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
type SelectPontuationsProps = {
    setPositionsWithScore: any
    pontuations: Array<{ position: number, score: number }>,
    setPontuations: any
    positionsWithScore: number
}
const SelectPontuations = ({ positionsWithScore, setPositionsWithScore, pontuations, setPontuations }: SelectPontuationsProps) => {

    const ResetPositionsScore = () => {
        for (let i = 4; i > positionsWithScore; i--) {
            const newPontuations = [...pontuations]
            newPontuations[i].score = 0
            setPontuations(newPontuations)
        }
    }

    return (
        <StyledSelectPontuations onClick={() => ResetPositionsScore()}>
            <h3 className="title">Posições com Pontuação</h3>
            <span className="container-select">
                <ChevronRightIcon className="icon"/>
                <select
                    className="select"
                    onChange={(e) => setPositionsWithScore(e.target.value as unknown as number)}
                >
                    <option value={0}>1 equipe com pontuação</option>;
                    <option value={1}>2 equipe com pontuação</option>;
                    <option selected value={2}>3 equipe com pontuação</option>;
                    <option value={3}>4 equipe com pontuação</option>;
                    <option value={4}>5 equipe com pontuação</option>;
                </select>
            </span>
        </StyledSelectPontuations>
    )
}

export default SelectPontuations