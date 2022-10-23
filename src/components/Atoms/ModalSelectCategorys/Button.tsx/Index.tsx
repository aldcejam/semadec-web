import { StyledButton } from "./Styled"
import { dataForSearchBySportCategoriesProps } from "../../../templates/ModalSelectCategorys/TypesDataForResearchGame"
import { toast } from "react-toastify";

type ButtonProps = {
    value: string
    dataForSearchBySportCategories: dataForSearchBySportCategoriesProps
}


const Button = ({ value, dataForSearchBySportCategories }: ButtonProps) => {
    const category = dataForSearchBySportCategories.userSelectedCategory
    const categoryGenre = dataForSearchBySportCategories.userSelectedCategoryGenre
    const sportSelected = dataForSearchBySportCategories.sport.sportName
    const RedirectUrl = `games?${category ? `category=${category}&` : ""}${categoryGenre ? `categoryGenre=${categoryGenre}&` : ""}${sportSelected ? `sport=${sportSelected}` : ""}`

    const VerifyIfCategoriesIsSelected = () => {
        if (!dataForSearchBySportCategories.userSelectedCategoryGenre) {
            toast.error("Selecione uma categoria de gênero para continuar");
        }
        else if(dataForSearchBySportCategories.sport.categorys && !dataForSearchBySportCategories.userSelectedCategory){
            toast.error("Selecione uma categoria do esporte para continuar");
        }
        else{
            window.location.href = RedirectUrl;
        }
    }
    return (
        <StyledButton>
            <div>
                <button onClick={() => VerifyIfCategoriesIsSelected()}>{value}</button>
            </div>
        </StyledButton>
    )
}

export default Button