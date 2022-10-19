import { StyledCategorys } from "./Styled"

type CategorysProps = {
    categorys: string[]
    selectCategory: (category: string) => void
}
const Categorys = ({categorys, selectCategory}:CategorysProps) => {
    return (
        <StyledCategorys>
            {categorys.map((category) => {
                return (
                    <div 
                    onClick={() => selectCategory(category)}
                    key={category} 
                    className="category">
                        <p>{category}</p>
                    </div>
                )
            })}
        </StyledCategorys>
    )
}

export default Categorys