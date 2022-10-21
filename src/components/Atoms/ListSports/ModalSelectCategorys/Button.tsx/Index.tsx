import Link from "next/link"
import { StyledButton } from "./Styled"
import { dataForResearchGameProps } from "../../../../templates/ListSports/ModalSelectCategorys/TypesDataForResearchGame"
import { toast } from "react-toastify";

type ButtonProps = {
    value: string
    dataForResearch: dataForResearchGameProps
}


const Button = ({ value, dataForResearch }: ButtonProps) => {
    const category = dataForResearch.userSelectedCategory
    const categoryGenre = dataForResearch.userSelectedCategoryGenre
    const sportSelected = dataForResearch.sport.sportName

    const HandleButton = () => {
        if (!dataForResearch.userSelectedCategoryGenre) {
            toast.error("Selecione uma categoria e um gênero para continuar");
        }else{
            window.location.href = `games?category=${category}&categoryGenre=${categoryGenre}&sportSelected=${sportSelected}`;
        }
    }
    return (
        <StyledButton onClick={() => HandleButton()}>
            <div>
                <button>{value}</button>
            </div>
        </StyledButton>
    )
}

export default Button