import React from "react"
import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./componets/common/Loading";



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
          </Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
