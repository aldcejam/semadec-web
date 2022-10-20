import Link from "next/link"
import { StyledButton } from "./Styled"
import {dataForResearchProps} from "../../../../templates/ListSports/ModalSelectCategorys/TypesDataForResearch" 

type ButtonProps = {
    value: string
    dataForResearch: dataForResearchProps
}

const Button = ({ value, dataForResearch }: ButtonProps) => {
    const category = dataForResearch.userSelectedCategory
    const categoryGenre = dataForResearch.userSelectedCategoryGenre
    const sportSelected = dataForResearch.sport.sportName
    return (
        <Link href={`games?category=${category}&categoryGenre=${categoryGenre}&sportSelected=${sportSelected}`}>
            <StyledButton>
                <div>
                    <button>{value}</button>
                </div>
            </StyledButton>
        </Link>
    )
}

export default Button