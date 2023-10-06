import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import { Home, PageNotFound } from "./pages";
import Layout from "../Layout";
import Login from "./pages/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {/* nested routes */}
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        {/* Other Routes to be configured here */}
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
