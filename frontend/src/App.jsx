import React from "react"
import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./componets/common/Loading";
import TeacherTemplates from "./pages/teacher/templates";
import CreateTemplatePage from "./pages/teacher/templates/create";
import NotFoundPage from "./pages/404";
import TeacherAssesmentsPage from "./pages/teacher/assesments";
import CreateAssesmentPage from "./pages/teacher/assesments/create";


const Home = lazy(() => import("./pages/index"));
const TeacherDashboard = lazy(()=> import("./pages/teacher/dashboard"));
const TeacherLayout = lazy(()=> import("./componets/Teacher/Layout"));

function App() {


  return (
    <Suspense fallback = {<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element = {<Home />}></Route>

          <Route element = {<TeacherLayout />}>
          <Route path="/teacher/dashboard" element = {<TeacherDashboard />}></Route>

          <Route path="/teacher/templates" element = {<TeacherTemplates />}></Route>
          <Route path="/teacher/templates/create" element = {<CreateTemplatePage />}></Route>

          <Route path="/teacher/assesments" element = {<TeacherAssesmentsPage />}></Route>
          <Route path="/teacher/assesments/create" element = {<CreateAssesmentPage />}></Route>

          </Route>

          <Route path="*" element = {<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
