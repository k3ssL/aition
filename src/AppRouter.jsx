import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/registration'} element={<RegistrationPage/>}/>
            <Route path={'/authorization'} element={<LoginPage/>}/>
            <Route path={'/catalog'} element={<CatalogPage/>}/>
        </Routes>
    );
};

export default AppRouter;