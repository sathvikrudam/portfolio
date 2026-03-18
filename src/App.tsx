import Cursor from "@/components/Cursor";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {

  useEffect(() => {
  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty(
      "--mouse-x",
      `${e.clientX}px`
    );

    document.documentElement.style.setProperty(
      "--mouse-y",
      `${e.clientY}px`
    );
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>

      <Cursor />   {/* ✅ ADD HERE (top-most UI layer) */}

      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);
}

export default App;
