import Homepage from "./pages/HomePage/HomePage";
import React from "react";
import NotFound from "./pages/NotFound/NotFound";
const routes = [
  { path: "", exact: true, main: () => <Homepage /> },
  {
    path: "/",
    exact: false,
    main: () => <NotFound />,
  },
];
export default routes;
