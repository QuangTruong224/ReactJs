import React from "react";
import HomePage from "./HomePage/HomePage";
import NotFound from "./NotFound/NotFound";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/list",
    exact: false,
    main: () => <ListEmployeeComponent />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
