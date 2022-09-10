import Homepage from "./pages/HomePage/HomePage";
import React from "react";
import NotFound from "./pages/NotFound/NotFound";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";

// match dùng để lấy tham số của đối tượng

const routes = [
  { path: "/", exact: true, main: () => <Homepage /> },

  {
    path: "/list",
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: "/product/add",
    exact: false,
    main: () => <ProductActionPage />,
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ match }) => <ProductActionPage match={match} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];
export default routes;
