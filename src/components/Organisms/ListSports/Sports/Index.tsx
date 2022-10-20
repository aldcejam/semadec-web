import ButtonSport from "../../../Atoms/ListSports/ButtonSport/Index";
import { StyledSports } from "./Styled"
import { ApiSports, ApiSportsProps } from "./api"
import { dataForResearchProps } from "../../../templates/ListSports/ModalSelectCategorys/TypesDataForResearch"


type SportsProps = {
    dataForResearch: dataForResearchProps,
    setDataForResearch: React.Dispatch<React.SetStateAction<dataForResearchProps>>
    ToggleModal: () => void
}

const Sports = ({dataForResearch,setDataForResearch, ToggleModal}:SportsProps) => {

    const sportsArraySize = ApiSports.length / 2

    const handleButtonSport = (sport: ApiSportsProps) => {
        setDataForResearch({ ...dataForResearch, sport: sport })
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
                                <ButtonSport nameButton={sport.sportName} />
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
                                <ButtonSport nameButton={sport.sportName} />
                            </span>
                        )
                    }
                })}
            </div>
        </StyledSports >
    )
}

export default Sports