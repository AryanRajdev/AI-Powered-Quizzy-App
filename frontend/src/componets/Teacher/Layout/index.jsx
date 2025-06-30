import React from "react";
import { Outlet } from "react-router-dom";

const TeacherLayout = () => {
  return (
    <div className="h-full w-full flex">
      <aside className="w-52 h-full bg-red-500">aside</aside>

      <main className="flex-1 overflow-auto">
        <nav>nav</nav>
        <Outlet />
      </main>
    </div>
  );
};

export default TeacherLayout;
