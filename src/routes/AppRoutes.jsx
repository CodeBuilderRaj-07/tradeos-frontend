import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import OpenTrades from "../pages/OpenTrades";
import Journal from "../pages/Journal";
import Analytics from "../pages/Analytics";
import AIInsights from "../pages/AIInsights";
import Settings from "../pages/Settings";
import NewTrade from "../pages/NewTrade";
import Calendar from "../pages/Calendar";
import Strategies from "../pages/Strategies";

import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/open-trades"
          element={
            <MainLayout>
              <OpenTrades />
            </MainLayout>
          }
        />

        <Route
          path="/journal"
          element={
            <MainLayout>
              <Journal />
            </MainLayout>
          }
        />

        <Route
          path="/new-trade"
          element={
            <MainLayout>
              <NewTrade />
            </MainLayout>
          }
        />

        <Route
          path="/analytics"
          element={
            <MainLayout>
              <Analytics />
            </MainLayout>
          }
        />

        <Route
          path="/calendar"
          element={
            <MainLayout>
              <Calendar />
            </MainLayout>
          }
        />

        <Route
          path="/ai-insights"
          element={
            <MainLayout>
              <AIInsights />
            </MainLayout>
          }
        />

        <Route
          path="/strategies"
          element={
            <MainLayout>
              <Strategies />
            </MainLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

    </BrowserRouter>
  );
}