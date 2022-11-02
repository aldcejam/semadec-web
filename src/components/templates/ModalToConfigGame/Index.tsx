import { FormControl, InputLabel, MenuItem, Modal, Select } from "@mui/material"
import { DateForRegistrationProps } from "../../../Types/RegisterGame/TypesDateForRegistration";
import { StyledModalToConfigGame } from "./Styled"
import { useEffect, useState } from "react"
import Image from "next/image";

type ModalConfigGameProps = {
    modalIsOpen: boolean,
    ToggleModal: () => void,
    dataForRegistration: DateForRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DateForRegistrationProps>>
}
const ModalToConfigGame = ({ ToggleModal, modalIsOpen, dataForRegistration, setDataForRegistration }: ModalConfigGameProps) => {

    const [positionsWithScore, setPositionsWithScore] = useState(3)
    type PositionsProps = {
        position: number,
        score: number
    }
    const [pontuations, setPontuations] = useState<PositionsProps[]>([
        { position: 1, score: 30 },
        { position: 2, score: 0 },
        { position: 3, score: 0 },
        { position: 4, score: 0 },
        { position: 5, score: 0 },
    ])


    console.log(pontuations)

    return (
        <Modal
            keepMounted
            open={modalIsOpen}
            onClose={ToggleModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            BackdropProps={{ sx: { backgroundColor: "divider", backdropFilter: "blur(5px)", outline: "none", cursor: "pointer" } }}
        >
            <StyledModalToConfigGame>
                <h2>{dataForRegistration.sport.sportName} - {dataForRegistration.userSelectedCategory}</h2>
                <div className="container">
                    <article className="cards">
                        {dataForRegistration.teams.map((team, index) => {
                            return (
                                team.teamLogo.length > 0 ?
                                    <div className="card" key={index}>
                                        <Image src={team.teamLogo} layout="fill" />
                                    </div>
                                    : null

                            )
                        })
                        }
                    </article>
                    <div className="positions-with-score">
                        <FormControl className="input-material-ui">
                            <InputLabel id="demo-simple-select-helper-label">posições com pontuação</InputLabel>
                            <Select
                                label="posições com pontuação"
                                className="select"
                                defaultValue={''}
                                onChange={(e) => setPositionsWithScore(e.target.value as unknown as number)}
                                size="medium"
                            >

                                <MenuItem value={1}>1 equipe com pontuação</MenuItem>;
                                <MenuItem value={2}>2 equipe com pontuação</MenuItem>;
                                <MenuItem value={3}>3 equipe com pontuação</MenuItem>;
                                <MenuItem value={4}>4 equipe com pontuação</MenuItem>;
                                <MenuItem value={5}>5 equipe com pontuação</MenuItem>;
                            </Select>
                        </FormControl>
                        <div className="pontuations">
                            {
                                pontuations.map((pontuation, index) => {
                                    if (index + 1 <= positionsWithScore) {
                                        return (
                                            <div className="pontuation" key={index}>
                                                <p>{index + 1}º lugar</p>
                                                <input type="number" value={pontuation.score} onChange={(e) => {
                                                    const newPontuations = [...pontuations]
                                                    newPontuations[index].score = Number(e.target.value)
                                                    setPontuations(newPontuations)
                                                }
                                                } />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="situation">

                    </div>
                </div>
            </StyledModalToConfigGame>
        </Modal>
    )
}

export default ModalToConfigGame

/* const removeFirstItemStringNull = () => {
    setDataForRegistration({
      ...dataForRegistration,
      teams: dataForRegistration.teams.filter(team => team.teamName.length !== 0)
    })
  } */