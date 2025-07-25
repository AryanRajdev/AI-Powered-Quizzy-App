import { icons, LayoutDashboard, LayoutTemplate,TestTubeDiagonal } from "lucide-react";

export const sidebarTopElements = [
  {
    label: "Dashboard",
    to: "/teacher/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    label: "Templates",
    to: "/teacher/templates",
    icon: <LayoutTemplate />,
  },
  {
    label : "Assesments",
    to : "/teacher/assesments",
    icon : <TestTubeDiagonal />,
  }
];