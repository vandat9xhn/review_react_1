import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
//
import { theme } from "./_theme/theme";
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./_styles/tailwind_output.css";
import "./_styles/slick.scss";
import "./_styles/App.scss";
//
import Header from "./components/_header/_main/Header";
import ContextAppComponent from "./context/app/ContextAppComponent";
import CustomRoutes from "./__routes/CustomRoutes";

//
interface AppProps {}

//
const App: React.FunctionComponent<AppProps> = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <ContextAppComponent>
                    <div>
                        <div>
                            <Header />
                        </div>

                        <CustomRoutes />
                    </div>
                </ContextAppComponent>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
