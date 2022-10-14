import ButtonSport from "../../../Molecules/ListSports/ButtonSport/Index"
import { StyledSports } from "./Styled"

const Sports = () => {

    const sports = [
        'futbol',
        'handball',
        'natação',
        'vôlei',
        'futbol',
        'handball',
        'natação',
        'vôlei',
        'futbol',
        'handball',
        'natação',
        'vôlei',
    ]
    const sportsArraySize = sports.length / 2

    return (
        <StyledSports>
            <div className="sports__left">
                {sports.map((buttonName, index) => {
                    if (index >= sportsArraySize) {
                        return (
                            <ButtonSport nameButton={buttonName} key={buttonName} />
                        )
                    }
                })}
            </div>
            <div className="sports__right">
                {sports.map((buttonName, index) => {
                    if (index < sportsArraySize) {
                        return (
                            <ButtonSport nameButton={buttonName} key={buttonName} />
                        )
                    }
                })}
            </div>
        </StyledSports>
    )
}

export default Sports