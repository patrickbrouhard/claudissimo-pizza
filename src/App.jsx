import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createRouter({ routeTree });

// ✅ Config minimaliste, plus besoin de experimental_prefetchInRender
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Tu peux garder d'autres options globales si besoin
      // ex: retry: 2, refetchOnWindowFocus: false, etc.
    },
  },
});

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
