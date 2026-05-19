import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./routes";
import { LanguageProvider } from "./components/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
    </LanguageProvider>
  );
}
