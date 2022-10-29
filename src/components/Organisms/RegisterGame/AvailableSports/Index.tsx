import { DateForRegistrationProps } from "../../../../Types/RegisterGame/TypesDateForRegistration";
import SelectSportButton from "../../../Atoms/SportButton/Select/Index"
import { ApiSports } from "../../ListSports/Sports/fetchSports"
import { StyledAvailableSports } from "./Styled"

type AvailableSportsProps = {
    dataForRegistration: DateForRegistrationProps;
    setDataForRegistration: React.Dispatch<React.SetStateAction<DateForRegistrationProps>>
}
const AvailableSports = ({ dataForRegistration, setDataForRegistration }: AvailableSportsProps) => {

    const SelectSport = (sportName: string) => {
        setDataForRegistration({
            ...dataForRegistration,
            sportName: sportName
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
                            onClick={() => SelectSport(sport.sportName)}>
                            <SelectSportButton
                                value={sport.sportName}
                                selected={dataForRegistration.sportName == sport.sportName ? "selected" : ""}
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