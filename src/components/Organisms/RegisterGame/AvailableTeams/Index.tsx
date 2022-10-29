import { useState } from "react";
import { DateForRegistrationProps } from "../../../../Types/RegisterGame/TypesDateForRegistration";
import TeamCard from "../../../Molecules/RegisterGame/TeamCard/Index"
import { RegisteredTeams } from "./FetchRegisteredTeams"
import { StyledAvailableTeams } from "./Styled"

type AvailableTeamsProps = {
    dataForRegistration: DateForRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DateForRegistrationProps>>
}
const AvailableTeams = ({ dataForRegistration, setDataForRegistration }: AvailableTeamsProps) => {

    let teamIsSelected: boolean = false;
    const CheckIfTeamAlreadySelected = (teamName: string) => {
        dataForRegistration.teams.forEach(team => {
            if (team == teamName) {
                teamIsSelected = true
            }
        });

    }
    const SelectTeam = (teamName: string) => {
        CheckIfTeamAlreadySelected(teamName)
        dataForRegistration.teams.forEach(() => {
            !teamIsSelected ?
                setDataForRegistration({
                    ...dataForRegistration,
                    teams: [...dataForRegistration.teams, teamName]
                })
                :
                setDataForRegistration({
                    ...dataForRegistration,
                    teams: dataForRegistration.teams.filter(team => team !== teamName)
                })
        });
    }

    const cardSelected = (teamSelected: string) => {
        return (dataForRegistration.teams.map((team) => {
            if (team === teamSelected) {
                return "selected"
            }
            else {
                return ""
            }
        }))
    }
    return (
        <StyledAvailableTeams>
            <h2>Times disponíveis</h2>
            <article className="box-teams">
                {RegisteredTeams.map(team => {
                    return (
                        <span
                            onClick={() => SelectTeam(team.teamName)}
                            key={team.teamName}
                        >
                            <TeamCard
                                teamLogo={team.teamLogo}
                                teamName={team.teamName}
                                cardSelected={cardSelected(team.teamName)}
                            />
                        </span>
                    )
                })}
            </article>
            <h3>!!! clique para selecionar/2 cliques para desselecionar</h3>
        </StyledAvailableTeams>
    )
}

export default AvailableTeams