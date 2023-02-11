import React from "react";
import MintingSuccessful from "pages/MintingSuccessful";
import CreatorsPage from "./pages/CreatorsPage";
import VideoDisplay from "./pages/VideoDisplay";
import MainPage from "pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/creatorspage" element={<CreatorsPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/videodisplay" element={<VideoDisplay />} />
        <Route path="/mintingsuccessful" element={<MintingSuccessful />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
