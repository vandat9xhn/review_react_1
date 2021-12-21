import { createTheme } from '@mui/material';

// colors
const primary = '#05';
const secondary = '#4829B2';
const black = '#343a40';
const darkBlack = 'rgb(36, 40, 44)';
const background = '#f5f5f5';
const warningLight = 'rgba(253, 200, 69, .3)';
const warningMain = 'rgba(253, 200, 69, .5)';
const warningDark = 'rgba(253, 200, 69, .7)';

// spacing
const spacing = 8;

//
export const theme = createTheme({
    palette: {
        primary: { main: primary, light: '#42a5f5' },
        secondary: { main: secondary },
        common: {
            black,
        },
        warning: {
            light: warningLight,
            main: warningMain,
            dark: warningDark,
        },
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
        background: {
            default: background,
        },
    },
    spacing,
});
