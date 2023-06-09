import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/movie/:imdbId" element={<MovieDetail />}></Route>
                        <Route path="*" element={<PageNotFound />}></Route>
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    )
};

export default App;
