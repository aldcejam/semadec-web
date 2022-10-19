import Link from "next/link"
import { StyledButton } from "./Styled"
import {dataForResearch} from "../../../templates/ListSports/ModalSelectCategorys/Types" 

type ButtonProps = dataForResearch &{
    value: string
}

const Button = ({ value,dataForResearch }: ButtonProps) => {
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