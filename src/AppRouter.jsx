import React from 'react';
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={''}/>
            <Route path={'/registration'} element={''}/>
            <Route path={'/authorization'} element={''}/>
            <Route path={'/catalog'} element={''}/>
        </Routes>
    );
};

export default AppRouter;