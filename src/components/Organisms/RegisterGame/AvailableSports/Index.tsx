import { DateForRegistrationProps } from "../../../../Types/RegisterGame/TypesDateForRegistration";
import SelectSportButton from "../../../Atoms/SportButton/Select/Index"
import { ApiSports, ApiSportsProps } from "../../ListSports/Sports/fetchSports"
import { StyledAvailableSports } from "./Styled"

type AvailableSportsProps = {
    dataForRegistration: DateForRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DateForRegistrationProps>>
}
const AvailableSports = ({ dataForRegistration, setDataForRegistration }: AvailableSportsProps) => {

    

    const SelectSport = (sport: ApiSportsProps) => {
        setDataForRegistration({
            ...dataForRegistration,
            userSelectedCategory: "",
            userSelectedCategoryGenre: "",
            sport: {...dataForRegistration.sport,
                sportName: sport.sportName,
                categoryGenre: sport.categoryGenre,
                categorys: sport.categorys,
                MinNumberOfTeams: sport.MinNumberOfTeams,
                MaxNumberOfTeams: sport.MaxNumberOfTeams
            }
        })
    }
    
    return (
        <StyledAvailableSports>
            <h2 className="title">Escolha o esporte</h2>
            <div className="box-sports">
                {ApiSports.map((sport) => {
                    return (
                        <span
                            key={sport.sportName}
                            onClick={() => SelectSport(sport)}>
                            <SelectSportButton
                                value={sport.sportName}
                                selected={dataForRegistration.sport.sportName == sport.sportName ? "selected" : ""}
                            />
                        </span>
                    )
                })
                }
            </div>
        </StyledAvailableSports>
    )
}

export default AvailableSports