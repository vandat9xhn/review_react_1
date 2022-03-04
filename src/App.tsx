import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
//
import { theme } from './_theme/theme';
//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './_styles/tailwind_output.css';
import './_styles/slick.scss';
import './_styles/App.scss';
//
import Header from './components/_header/_main/Header';
import Home from './pages/home/_main/Home';

//
interface AppProps {}

//
const App: React.FunctionComponent<AppProps> = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div>
                    <div>
                        <Header />
                    </div>

                    <Routes>
                        <Route path="/home/*" element={<Home />}>
                            <Route
                                path="1"
                                element={<div>111111111111111</div>}
                            />
                            <Route
                                path="2"
                                element={<div>222222222222222</div>}
                            />
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
