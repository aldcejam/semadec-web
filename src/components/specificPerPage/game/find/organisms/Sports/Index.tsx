import { StyledSports } from "./Styled"
import { fetchSports, fetchSportsProps } from "../../../../../../use/FetchSports/fetchSports"
import { DataForGameResearchProps } from "../../../../../../Types/DataForGameResearchProps"
import HoverSportButton from "../../atoms/HoverSportButton/Index"


type SportsProps = {
    setDataForSearchBySportCategories: React.Dispatch<React.SetStateAction<DataForGameResearchProps>>
    ToggleModal: () => void
}

const Sports = ({setDataForSearchBySportCategories, ToggleModal}:SportsProps) => {

    const sportsArraySize = fetchSports.length / 2

    const handleButtonSport = (sport: fetchSportsProps) => {
        setDataForSearchBySportCategories({ userSelectedCategory: '',userSelectedCategoryGenre:'', sport: sport })
        ToggleModal()
    }

    return (
        <StyledSports>
            <div className="sports__left">
                {fetchSports.map((sport, index) => {
                    if (index >= sportsArraySize) {
                        return (
                            <span
                                onClick={() => handleButtonSport(sport)}
                                key={sport.sportName}>
                                <HoverSportButton nameButton={sport.sportName} />
                            </span>
                        )
                    }
                })}
            </div>
            <div className="sports__right">
                {fetchSports.map((sport, index) => {
                    if (index < sportsArraySize) {
                        return (
                            <span
                                onClick={() => handleButtonSport(sport)}
                                key={sport.sportName}>
                                <HoverSportButton nameButton={sport.sportName} />
                            </span>
                        )
                    }
                })}
            </div>
        </StyledSports >
    )
}

export default Sports