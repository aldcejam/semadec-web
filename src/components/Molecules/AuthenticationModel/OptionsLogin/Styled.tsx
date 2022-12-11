import { styled } from "@mui/material";

export const StyledOptionsLogin = styled("div")`

    margin-top: 30px;
    .title{
        position: relative;
        font-size: 1.3rem;
        text-align: center;
        font-weight: 600;
        color: ${({ theme }) => theme.palette.text.primary};

        &::before{
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 30%;
            height: 2px;
            background-color: ${({ theme }) => theme.palette.text.primary};
        }
        &::after{
            content: "";
            position: absolute;
            top: 50%;
            right: 0;
            width: 30%;
            height: 2px;
            background-color: ${({ theme }) => theme.palette.text.primary};
        }

    }
    .account-options{
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        gap: 10px;
        font-weight: 900;
    }

`