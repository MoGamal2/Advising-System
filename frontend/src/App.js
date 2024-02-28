import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import { Route, Router, RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
