import Image from "next/image"
import { TeamsProps } from "../../TypesTeams"
import { StyleForMoreThanTwoTeams } from "./Style.ForMoreThanTwoTeams"


const ForMoreThanTwoTeams = ({ game }: TeamsProps) => {
    return (
        <StyleForMoreThanTwoTeams>
            {
                game.placar.map((team, index, array) => {
                    return (
                        <div key={team.course} className="team">
                            <div className="team__logo">
                                <Image src={team.logo} layout="fill" />
                            </div>
                            {index != array.length-1 ?
                                <div className="icon-versus" />
                                :
                                ""
                            }
                        </div>
                    )
                })
            }
        </StyleForMoreThanTwoTeams >
    )
}
export default ForMoreThanTwoTeams