import { DataForGameResearchProps } from "../../../../../Types/DataForGameResearchProps"
import { StyledCategorys } from "./Styled"

type CategorysProps = {
    categorys: string[]
    selectCategory: (category: string) => void
    dataForSearchBySportCategories: DataForGameResearchProps
    
}
const Categorys = ({categorys, selectCategory, dataForSearchBySportCategories}:CategorysProps) => {
    return (
        <StyledCategorys>
            {categorys.map((category) => {
                return (
                    <div 
                    onClick={() => {selectCategory(category); }}
                    key={category} 
                    className={`category ${dataForSearchBySportCategories.userSelectedCategory == category ? "selected" : ''}`}>
                        <p>{category}</p>
                    </div>
                )
            })}
        </StyledCategorys>
    )
}

export default Categorys