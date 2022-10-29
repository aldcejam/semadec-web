import { StyledSports } from "./Styled"
import { ApiSports, ApiSportsProps } from "./fetchSports"
import { dataForSearchBySportCategoriesProps } from "../../../templates/ModalSelectCategorys/TypesDataForResearchGame"
import HoverSportButton from "../../../Atoms/SportButton/Hover/Index"


type SportsProps = {
    setDataForSearchBySportCategories: React.Dispatch<React.SetStateAction<dataForSearchBySportCategoriesProps>>
    ToggleModal: () => void
}

const Sports = ({setDataForSearchBySportCategories, ToggleModal}:SportsProps) => {

    const sportsArraySize = ApiSports.length / 2

    const handleButtonSport = (sport: ApiSportsProps) => {
        setDataForSearchBySportCategories({ userSelectedCategory: '',userSelectedCategoryGenre:'', sport: sport })
        ToggleModal()
    }

    return (
        <StyledSports>
            <div className="sports__left">
                {ApiSports.map((sport, index) => {
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
                {ApiSports.map((sport, index) => {
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