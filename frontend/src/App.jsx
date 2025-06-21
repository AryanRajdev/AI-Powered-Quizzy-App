import React from "react"
import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./componets/common/Loading";

const Home = lazy(() => import("./pages/index"));

function App() {


  return (
    <Suspense fallback = {<Loading />}>
      <Router>
        <Routes>
          <Route path="/" element = {<Home />}></Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
