import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { PackagesPage } from "./components/PackagesPage";
import { PackageDetailPage } from "./components/PackageDetailPage";
<<<<<<< HEAD
=======
import { GalleryPage } from "./components/GalleryPage";
>>>>>>> f2a13046bc83064117438c4523f0547f3831b477
import { VideosPage } from "./components/VideosPage";
import { ContactPage } from "./components/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "packages", Component: PackagesPage },
      { path: "packages/:id", Component: PackageDetailPage },
<<<<<<< HEAD
=======
      { path: "gallery", Component: GalleryPage },
>>>>>>> f2a13046bc83064117438c4523f0547f3831b477
      { path: "videos", Component: VideosPage },
      { path: "contact", Component: ContactPage },
      {
        path: "*",
        Component: () => {
          return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
              <span className="text-6xl mb-4">🕉</span>
              <h1 className="text-3xl text-gray-800 mb-2" style={{ fontWeight: 700 }}>Page Not Found</h1>
              <p className="text-gray-600 mb-4">The page you are looking for does not exist.</p>
              <a href="/" className="text-orange-600 hover:underline">← Back to Home</a>
            </div>
          );
        },
      },
    ],
  },
]);
