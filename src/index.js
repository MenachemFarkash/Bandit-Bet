import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import CrateBattleMainPage from "./Pages/CrateBattle/CrateBattleMainPage";
import CrateBattleContextProvider from "./Context/CratebattlesContext";
import CrateSelector from "./Components/CrateBattles/CrateSelector/CrateSelector";
import Navbar from "./Pages/Navbar/Navbar";
import Sidebar from "./Pages/Sidebar/Sidebar";
import MainPage from "./Pages/MainPage/MainPage";
import ConfigureCrateBattle from "./Components/CrateBattles/ConfigureCrateBattle/ConfigureCrateBattle";
import MinefieldMandness from "./Pages/MinefieldMadness/MinefieldMadness";
import SlotMachine from "./Components/CrateBattles/SlotMachine/SlotMachine";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <CrateBattleContextProvider>
            <div className="grid">
                <Navbar />
                <Sidebar />
                <Routes>
                    //MainPage Routes =====
                    <Route path="/" element={<MainPage />} />
                    //Crate Battle Routes =====
                    <Route path="/crateBattles" element={<CrateBattleMainPage />} />
                    <Route path="/crateBattles/ConfigureCrateBattle" element={<ConfigureCrateBattle />} />
                    <Route
                        path="/crateBattles/ConfigureCrateBattle/addCrates"
                        element={
                            <>
                                <CrateSelector />
                                <ConfigureCrateBattle />
                            </>
                        }
                    />
                    <Route path="/crateBattles/battleNumber" element={<SlotMachine />} />
                    <Route path="/crateSelector" element={<CrateSelector />} />
                    <Route path="/MINEFIELDMADNESS" element={<MinefieldMandness />} />
                </Routes>
            </div>
        </CrateBattleContextProvider>
    </BrowserRouter>
);
