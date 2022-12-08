import { styled } from "@mui/material";

export const StyledForm = styled("form")`
    
        display: flex;
        flex-direction: column;
        gap: 16px;
    
    .submit{
        width: 100%;
        height: 50px;
        background-color: ${({ theme }) => theme.palette.primary.main};
        border: 1px solid ${({ theme }) => theme.palette.primary.dark};
        border-radius: ${({ theme }) => theme.shape.borderRadius}px;
        color: ${({ theme }) => theme.palette.primary.contrastText};
        font-size: 0.9rem;
        font-weight: 500;

    }
`