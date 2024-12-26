import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Wrap with BrowserRouter
import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
