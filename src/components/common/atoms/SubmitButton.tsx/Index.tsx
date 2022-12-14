import { StyledSubmitButton } from "./Styled"

type SubmitButtonProps = {
    value: string
    Submit: () => void
}


const SubmitButton = ({ value, Submit }: SubmitButtonProps) => {
    
    return (
        <StyledSubmitButton>
            <div>
                <button onClick={() => Submit()}>{value}</button>
            </div>
        </StyledSubmitButton>
    )
}

export default SubmitButton