import Image from "next/image"
import { StyleForTwoTeams } from "./Style.ForTwoTeams"
import { TeamsProps } from "../../TypesTeams"

const ForTwoTeams = ({ game }: TeamsProps) => {

    return (
        <StyleForTwoTeams>
            {
                game.placar.map((team, index) => {
                    return (
                        <div key={team.course} className="team">
                            <div className="team__logo">
                                <Image src={team.logo} layout="fill" />
                            </div>
                            <div className="team__score">
                                {team.score}
                            </div>

                            {index == 0 ?
                                <div className="icon-versus" />
                                :
                                ""
                            }
                        </div>
                    )
                })
            }
        </StyleForTwoTeams>
    )
}

export default ForTwoTeams