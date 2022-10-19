import ButtonSport from "../../../Molecules/ListSports/ButtonSport/Index"
import { StyledSports } from "./Styled"
import { useState } from "react";
import ModalSelectCategorys from "../../../templates/ListSports/ModalSelectCategorys/Index";
import { sports, SportProps } from "../Sports/api"

type dataForResearchProps = {
    sport: {
        sportName: string,
        categorys: string[] | undefined,
        categoryGenre: string[]
    }
    userSelectedCategory: string,
    userSelectedCategoryGenre: string
}

const Sports = () => {

    const sportsArraySize = sports.length / 2

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [dataForResearch, setDataForResearch] = useState<dataForResearchProps>({
        sport: {
            sportName: "",
            categorys: undefined,
            categoryGenre: []
        },
        userSelectedCategory: "",
        userSelectedCategoryGenre: ""
    });

    const ToggleModal = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
    }
    const handleButtonSport = (sport: SportProps) => {
        setDataForResearch({ ...dataForResearch, sport: sport })
        ToggleModal()
    }

    return (
        <StyledSports>
            <div className="sports__left">
                {sports.map((sport, index) => {
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
                {sports.map((sport, index) => {
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
            <ModalSelectCategorys
                ToggleModal={ToggleModal}
                modalIsOpen={modalIsOpen}
                dataForResearch={dataForResearch}
                setDataForResearch={setDataForResearch}
            />
        </StyledSports >
    )
}

export default Sports