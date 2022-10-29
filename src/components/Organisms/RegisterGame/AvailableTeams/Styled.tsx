import { styled } from "@mui/material";

export const StyledAvailableTeams = styled("div")`
    color: ${({ theme }) => theme.palette.text.primary};
    text-align: center;
    h2{
    }
    .box-teams{
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        padding: 0px 20px;
    }
    h3{
        font-size: 0.7rem;
        font-weight: 300;
    }
`