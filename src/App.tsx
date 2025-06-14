
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AuthPage from "./components/auth/AuthPage";
import Dashboard from "./pages/Dashboard";
import PHCDashboard from "./pages/PHCDashboard";
import QueueManager from "./pages/QueueManager";
import HealthBot from "./pages/HealthBot";
import ResourceFinder from "./pages/ResourceFinder";
import AppointmentBooking from "./pages/AppointmentBooking";
import HealthRecords from "./pages/HealthRecords";
import FamilyHealth from "./pages/FamilyHealth";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Index />} />
      <Route path="/auth" element={user ? <Navigate to="/dashboard" replace /> : <AuthPage />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/phcdashboard" element={
        <ProtectedRoute requiredUserType="phc_staff">
          <PHCDashboard />
        </ProtectedRoute>
      } />
      <Route path="/queuemanager" element={
        <ProtectedRoute>
          <QueueManager />
        </ProtectedRoute>
      } />
      <Route path="/healthbot" element={
        <ProtectedRoute>
          <HealthBot />
        </ProtectedRoute>
      } />
      <Route path="/resourcefinder" element={
        <ProtectedRoute>
          <ResourceFinder />
        </ProtectedRoute>
      } />
      <Route path="/appointments" element={
        <ProtectedRoute>
          <AppointmentBooking />
        </ProtectedRoute>
      } />
      <Route path="/health-records" element={
        <ProtectedRoute>
          <HealthRecords />
        </ProtectedRoute>
      } />
      <Route path="/family-health" element={
        <ProtectedRoute>
          <FamilyHealth />
        </ProtectedRoute>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
