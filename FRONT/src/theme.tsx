import { createTheme } from "@mui/material/styles";
import { lightGreen, blueGrey } from '@mui/material/colors';


export const defaultTheme = createTheme({
    palette: {
        primary: {
            main: blueGrey[900]
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'outlined' &&
                        ownerState.color === 'primary' && {
                        borderColor: lightGreen['A700'],
                        color: lightGreen['A700'],
                        '&:hover': {
                            borderColor: lightGreen['A700'],
                        },
                    }),
                }),
            },
        },
    },
});