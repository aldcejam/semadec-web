import CurverBorderButton from "../../../public/format/Curver-border-button"
import GameSpecification from "./GameSpecification/Index"
import ForTwoTeams from "./ScoreBoard.tsx/ForTwoTeams/ForTwoTeams"
import { StyledGameCard } from "./Styled"
import { TeamsProps } from "./TypesTeams"

const GameCard = ({ game }: TeamsProps) => {


    return (
        <StyledGameCard>
            <CurverBorderButton />
            <div className="game-score">
                {
                    game.placar.length > 2 ?
                        <div className="game-score__only-two-teams">
                
                        </div>
                        :
                        <div className="game-score__more-than-two-teams">
                            <ForTwoTeams game={game} />
                        </div>
                }
                <GameSpecification game={game}/>
            </div>
        </StyledGameCard>
    )
}
export default GameCard