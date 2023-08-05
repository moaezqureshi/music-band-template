import React, { lazy } from "react";
import { Route, Routes } from "react-router";


const MainContainer = lazy(() => import('../components/mainContainer/MainContainer'))
const Header = lazy(() => import('../components/header/Header'))
const Footer = lazy(() => import('../components/footer/Footer'))

const Router = () => {
    return (
        <>
            <Header />
            <Routes >
                <Route path="/" exact={true} element={<MainContainer />} />
                <Route path="*" element={<MainContainer />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Router
