import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import AuthLayout from "./pages/preAuth/authLayout";
import ForgotUserName from "./pages/preAuth/forget-username";
import ForgotPassword from "./pages/preAuth/forget-password";
import LayoutWrapper from "./layout/layout";
import DashboardMerchant from "./pages/dashboard/dashboard-merchant";
import DashboardBank from "./pages/dashboard/dashboard-bank";
import ViewAnalytics from "./pages/bank/view-analytics";
import { BrowserRouter } from "react-router-dom";

const LandingComponent = React.lazy(() => import("./pages/preAuth/Landing"));


export default function AppRouter() {

  return (
    <>
      <BrowserRouter basename="/">
      <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Suspense fallback={<p>Loading..</p>}>
                <LandingComponent />
              </Suspense>
            </AuthLayout>
          }
        />
        <Route
          path="/forgot-username"
          element={
            <AuthLayout>
              <ForgotUserName />
            </AuthLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          }
        />
         <Route
          path="/dashboard-merchant"
          element={
              <DashboardMerchant />
          }
        />
         <Route
          path="/layout"
          element={
              <LayoutWrapper />
          }
        />
         <Route
          path="/dashboard-bank"
          element={
              <DashboardBank />
          }
        />
        <Route
          path="/view-analytics"
          element={
              <ViewAnalytics />
          }
        />
      </Routes>
      </BrowserRouter>
    </>
  );
}
