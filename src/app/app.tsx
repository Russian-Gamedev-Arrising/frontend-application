import { Routes, Route } from "react-router-dom"
import { Homepage } from "@pages/home-page"

import "./main.scss"
import { DefaultConfig } from "./layout/default-layout/ui/default-layout"

export function App() {
    return (
        <DefaultConfig>
            <Routes>
                <Route path={"/"} element={<Homepage />} />
            </Routes>
        </DefaultConfig>
    )
}
