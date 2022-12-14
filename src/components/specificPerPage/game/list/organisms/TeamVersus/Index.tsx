import ForMoreThanTwoTeams from "../../molecules/ScoreBoard/ForMoreThanTwoTeams/Index"
import ForTwoTeams from "../../molecules/ScoreBoard/ForTwoTeams/Index"
import { ScoreboardGameProps } from "../../../../../../use/FetchGames/GameProps"

const TeamVersus = ({ placar }:ScoreboardGameProps ) => {
    return (
        <div>
            {
                placar.length > 2 ?
                    <div className="game-score__only-two-teams">
                        <ForMoreThanTwoTeams placar={placar} />
                    </div>
                    :
                    <div className="game-score__more-than-two-teams">
                        <ForTwoTeams placar={placar} />
                    </div>
            }
        </div>

    )
}

export default TeamVersus