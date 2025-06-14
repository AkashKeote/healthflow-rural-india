
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import PHCDashboard from "./pages/PHCDashboard";
import QueueManager from "./pages/QueueManager";
import HealthBot from "./pages/HealthBot";
import ResourceFinder from "./pages/ResourceFinder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/phcdashboard" element={<PHCDashboard />} />
          <Route path="/queuemanager" element={<QueueManager />} />
          <Route path="/healthbot" element={<HealthBot />} />
          <Route path="/resourcefinder" element={<ResourceFinder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
