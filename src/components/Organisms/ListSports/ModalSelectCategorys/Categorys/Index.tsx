import { dataForResearchGameProps } from "../../../../templates/ListSports/ModalSelectCategorys/TypesDataForResearchGame"
import { StyledCategorys } from "./Styled"

type CategorysProps = {
    categorys: string[]
    selectCategory: (category: string) => void
    dataForResearch: dataForResearchGameProps
    
}
const Categorys = ({categorys, selectCategory, dataForResearch}:CategorysProps) => {
    return (
        <StyledCategorys>
            {categorys.map((category) => {
                return (
                    <div 
                    onClick={() => {selectCategory(category); }}
                    key={category} 
                    className={`category ${dataForResearch.userSelectedCategory == category ? "selected" : ''}`}>
                        <p>{category}</p>
                    </div>
                )
            })}
        </StyledCategorys>
    )
}

export default Categorys