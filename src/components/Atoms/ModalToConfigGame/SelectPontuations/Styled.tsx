import { styled } from "@mui/material/styles"
import { FormControl } from "@mui/material"

export const StyledSelectPontuations = styled(FormControl)`
    width: 100%;
    cursor: pointer;
    .MuiOutlinedInput-root {
          label {
        }
        & fieldset {
            border: solid 2px ${(props) => props.theme.palette.primary.dark};
            border-radius: ${(props) => props.theme.shape.borderRadius}px;
        }
        &.Mui-focused fieldset {
            border: solid 2px ${(props) => props.theme.palette.primary.main};
        }
    }
    MuiInputLabel-root {
        padding-bottom: 10px;
      }
`