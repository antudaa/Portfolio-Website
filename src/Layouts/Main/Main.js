import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';
import { createTheme, ThemeProvider } from "@mui/material";

const Main = () => {

    const [darkMode, setDarkMode] = React.useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light"
        }
    })

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Header check={darkMode} change={() => setDarkMode(!darkMode)}></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </ThemeProvider>
        </div>
    )
}

export default Main;