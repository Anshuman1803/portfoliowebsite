import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeCompo from "../UI-Components/HomeCompo";
import SkillCompo from "../UI-Components/SkillCompo";
import ContactCompo from "../UI-Components/ContactCompo";
import ProjectCompo from "../UI-Components/ProjectCompo";
import EducationCompo from "../UI-Components/EducationCompo";
import ContextStore from "../context/ContextStore";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomeCompo />} />
      <Route path="/skils" element={<SkillCompo />} />
      <Route path="/education" element={<EducationCompo />} />
      <Route path="/portfolio" element={
        <ContextStore>
          <ProjectCompo />
        </ContextStore>
      } />
      <Route path="/contact" element={<ContactCompo />} />
    </Routes>
  )
}

export default AppRouter;
