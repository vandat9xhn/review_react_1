import * as React from 'react';
import { ThemeProvider } from '@mui/material';
//
import { theme } from './_theme/theme';
//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './_styles/tailwind_output.css';
import './_styles/slick.scss';
//
import Header from './components/_header/_main/Header';
import AppSlick from './components/slick/_main/Slick';
import InputPlaceHolderOnTop from './components/inpput/placeholder_on_top/_main/InputPlaceHolderOnTop';
import BrickAndBall from './components/ball_and_brick/_main/BrickAndBall';
import MyRecoilInput from './components/my_recoil/input/MyRecoilInput';
// import GGMap from './components/gg_map/_main/GGMap';

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

                <div className="mt-4">
                    <AppSlick />
                </div>

                <div className="mt-4">
                    <InputPlaceHolderOnTop />
                </div>

                <div className="mt-4">
                    <BrickAndBall />
                </div>

                <div className="mt-4">
                    <MyRecoilInput />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;
