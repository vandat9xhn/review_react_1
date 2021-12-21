import * as React from 'react';
import { ThemeProvider } from '@mui/material';
// 
import { theme } from './_theme/theme';
//
import './_styles/tailwind_output.css';
// 
import Header from './components/_header/_main/Header';

//
interface AppProps {}

//
const App: React.FunctionComponent<AppProps> = () => {
    return (
        <ThemeProvider theme={theme}>

        <div>
            <div>
                <Header />
            </div>

            <div></div>

            <div></div>
        </div>
        </ThemeProvider>
    );
};

export default App;
