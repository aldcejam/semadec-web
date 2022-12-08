import { DataForGameRegistrationProps, TeamsProps } from "../../../../Types/DataForGameRegistrationProps";
import { RegisteredTeams } from "../../../../use/fetchRegisteredTeams";
import TeamCard from "../../../Molecules/RegisterGame/TeamCard/Index"
import { StyledAvailableTeams } from "./Styled"

type AvailableTeamsProps = {
    dataForRegistration: DataForGameRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DataForGameRegistrationProps>>
}
const AvailableTeams = ({ dataForRegistration, setDataForRegistration }: AvailableTeamsProps) => {


    /* ================================= */
    let teamIsSelected: boolean = false;
    const CheckIfTeamAlreadySelected = (teamName: string) => {
        dataForRegistration.teams.forEach(team => {
            if (team.teamName == teamName) {
                teamIsSelected = true
            }
        });

    }

    const UncheckIfTeamIsSelected = (selectedTeam: TeamsProps) => {
        return (
            setDataForRegistration({
                ...dataForRegistration,
                teams: dataForRegistration.teams.filter(team => team.teamName !== selectedTeam.teamName)
            })
        )
    }

    const ToggleTeamSelected = (selectedTeam: TeamsProps) => {
        CheckIfTeamAlreadySelected(selectedTeam.teamName)

        if (teamIsSelected) {
            UncheckIfTeamIsSelected(selectedTeam)
        } else {
            setDataForRegistration({
                ...dataForRegistration,
                teams: [...dataForRegistration.teams,
                { teamLogo: selectedTeam.teamLogo, teamName: selectedTeam.teamName }]
            })

        }
    }

    const SelectTeam = (selectedTeam: { teamName: string, teamLogo: string }) => {

        dataForRegistration.teams.forEach(() => {
            ToggleTeamSelected(selectedTeam)
        });
    }
    /* ================================= */

    const HaddleCardIsSelected = (teamSelected: string) => {
        return (dataForRegistration.teams.map((team) => {
            if (team.teamName === teamSelected) {
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
                                cardSelected={HaddleCardIsSelected(team.teamName)}
                            />
                        </span>
                    )
                })}
            </div>
        </StyledAvailableTeams>
    )
}

export default AvailableTeams