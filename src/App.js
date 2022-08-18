import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Form from "./components/Form"
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";
function App() {

    return (
        <>
            <Router >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/form' element={<Form />} />
                </Routes>
            </Router>
        </>
    )
}

export default App