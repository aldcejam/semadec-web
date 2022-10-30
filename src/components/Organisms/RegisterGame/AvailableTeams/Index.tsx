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
            if (team.teamName == teamName) {
                teamIsSelected = true
            }
        });

    }
    const SelectTeam = (selectedTeam: {teamName:string,teamLogo:string}) => {
        CheckIfTeamAlreadySelected(selectedTeam.teamName)
        
        dataForRegistration.teams.forEach(() => {
            !teamIsSelected ?
                setDataForRegistration({
                    ...dataForRegistration,
                    teams: [...dataForRegistration.teams, 
                        {teamLogo: selectedTeam.teamLogo,teamName: selectedTeam.teamName}]
                })
                :
                setDataForRegistration({
                    ...dataForRegistration,
                    teams: dataForRegistration.teams.filter(team => team.teamName !== selectedTeam.teamName)
                })
        });
    }
    
    const cardSelected = (teamSelected: string) => {
        return (dataForRegistration.teams.map((team) => {
            if (team.teamName === teamSelected) {
                return "selected"
            }
            else {
                return ""
            }
        }))
    }
    console.log(dataForRegistration.teams)
    return (
        <StyledAvailableTeams>
            <h2>Times disponíveis</h2>
            <div className="box-teams">
                {RegisteredTeams.map(team => {
                    return (
                        <span
                            onClick={() => SelectTeam(team)}
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
            </div>
        </StyledAvailableTeams>
    )
}

export default AvailableTeams