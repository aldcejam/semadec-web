import { DataForGameRegistrationProps } from "../../../../Types/DataForGameRegistrationProps";
import SelectSportButton from "../../../Atoms/SportButton/Select/Index"
import { fetchSports,fetchSportsProps } from "../../../../use/FetchSports/fetchSports"

import { StyledAvailableSports } from "./Styled"

type AvailableSportsProps = {
    dataForRegistration: DataForGameRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DataForGameRegistrationProps>>
}
const AvailableSports = ({ dataForRegistration, setDataForRegistration }: AvailableSportsProps) => {

    

    const SelectSport = (sport: fetchSportsProps) => {
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
    
    console.log(dataForRegistration)
    return (
        <StyledAvailableSports>
            <h2 className="title">Escolha o esporte</h2>
            <div className="box-sports">
                {fetchSports.map((sport) => {
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