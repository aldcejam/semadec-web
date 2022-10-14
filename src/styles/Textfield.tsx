import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({

    'input': {
      padding: '10px',
    },
    '& label.Mui-focused': {
      color: theme.palette.primary.main,
      marginTop: '0px !important',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
      marginTop: '50px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.dark,
      },
      '&.Mui-focused fieldset': {
        color: theme.palette.primary.main,
      },
    },
  
}));