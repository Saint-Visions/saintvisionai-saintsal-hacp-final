import "./global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Initialize Builder.io
import { builder } from "@builder.io/react";
import { BUILDER_API_KEY } from "./lib/builder";
import "./lib/builder-verify";

// Pages
import Index from "./pages/Index";
import IndexWithBuilder from "./pages/IndexWithBuilder";
import Login from "./pages/Login";
import Console from "./pages/Console";
import Dashboard from "./pages/Dashboard";
import CRM from "./pages/CRM";
import Pricing from "./pages/Pricing";
import HACP from "./pages/HACP";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import BuilderPage from "./components/BuilderPage";

// Initialize Builder.io
builder.init(BUILDER_API_KEY);

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<IndexWithBuilder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Builder.io managed content routes */}
        <Route path="/builder/*" element={<BuilderPage />} />
        <Route path="/content/*" element={<BuilderPage />} />

        {/* Alternative: Original homepage without Builder.io */}
        <Route path="/static" element={<Index />} />

        {/* Protected Routes */}
        <Route
          path="/console"
          element={
            <ProtectedRoute>
              <Console />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/crm"
          element={
            <ProtectedRoute>
              <CRM />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hacp"
          element={
            <ProtectedRoute>
              <HACP />
            </ProtectedRoute>
          }
        />

        {/* Catch all - 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
