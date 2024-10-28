import { Routes as AppRoutes, Route } from "react-router-dom";
import React, { useState, Suspense, lazy } from "react";
import HomePage from "../homepage/HomePage";

const Routes = () => {
  return (
      <AppRoutes>
        <Route path="/" element={<HomePage />} />
      </AppRoutes>
  );
};

export default Routes;
