import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();
const supabase = createClient('https://your-project-url.supabase.co', 'your-anon-key');

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SessionContextProvider supabaseClient={supabase}>
      <TooltipProvider>
        <div className="min-h-screen bg-martial-dark">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </SessionContextProvider>
  </QueryClientProvider>
);

export default App;