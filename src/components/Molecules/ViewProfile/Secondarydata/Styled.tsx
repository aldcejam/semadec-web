import { styled } from "@mui/material";

export const StyledSecondarydata = styled("div")`
    position: relative;
      width: 100%;
      overflow-y: hidden;
      padding: 0;

      .secondary-informations__more-information-button {
        width: 100%;
        display: flex;
        align-items: baseline;
        gap: 10px;
        cursor: pointer;
        .angle-botton--icon {
          position: relative;
          width: 20px;
          height: 20px;
          transition: .5s;
        }
        .rotate-angle-button{
          transform: scale(-1);
        }
        p {
          color: ${(props) => props.theme.palette.text.primary};
          font-size: 1.1rem;
          font-weight: bold;
          margin: 10px;
        }
      }
      .secondary-informations__informations {
        max-height: 0px;
        overflow: hidden;
        transition: 0.4s;
        .informations--academic-email,
        .informations--personal-mail {
          margin: 5px 0;
          strong {
            text-transform: capitalize;
            color: ${(props) => props.theme.palette.text.secondary};
          }
          span {
            color: ${(props) => props.theme.palette.primary.contrastText};
            letter-spacing: 0.3px;
            margin: 0 5px;
          }
        }
      }
      .active-informations {
        max-height: 1000px;
      }

`