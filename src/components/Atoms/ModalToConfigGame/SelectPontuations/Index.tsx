import { StyledSelectPontuations } from "./Styled"
import { FormControl, InputLabel, MenuItem, Modal, Select } from "@mui/material"

type SelectPontuationsProps = {
    setPositionsWithScore: any
    pontuations: Array<{ position: number, score: number }>,
    setPontuations: any
    positionsWithScore: number
}
const SelectPontuations = ({ positionsWithScore, setPositionsWithScore, pontuations, setPontuations }: SelectPontuationsProps) => {

    const ResetPositionsScore  = () => {
        for (let i = 4; i > positionsWithScore; i--) {
            const newPontuations = [...pontuations]
            newPontuations[i].score = 0
            setPontuations(newPontuations)
        }
    }

    return (
        <StyledSelectPontuations onClick={()=> ResetPositionsScore()}>
            <InputLabel id="demo-simple-select-helper-label">posições com pontuação</InputLabel>
            <Select
                label="posições com pontuação"
                className="select"
                defaultValue={''}
                onChange={(e) => setPositionsWithScore(e.target.value as unknown as number)}
                size="medium"
            >

                <MenuItem value={0}>1 equipe com pontuação</MenuItem>;
                <MenuItem value={1}>2 equipe com pontuação</MenuItem>;
                <MenuItem value={2}>3 equipe com pontuação</MenuItem>;
                <MenuItem value={3}>4 equipe com pontuação</MenuItem>;
                <MenuItem value={4}>5 equipe com pontuação</MenuItem>;
            </Select>
        </StyledSelectPontuations>
    )
}

export default SelectPontuations