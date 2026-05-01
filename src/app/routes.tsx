import { createBrowserRouter } from "react-router";
import { ScrollRestoration } from "react-router";

import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import ServicesPage from "./pages/Services";
import ShadowOperatingPage from "./pages/ShadowOperating";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import SEOPage from "./pages/SEO";
import AdsPage from "./pages/Ads";
import SocialMediaPage from "./pages/SocialMedia";
import GoogleBusinessProfilePage from "./pages/GoogleBusinessProfile";
import { ErrorPage } from "./components/ErrorPage";

// We create a wrapper that runs your Layout AND fixes the scrolling
function RootWrapper() {
  return (
    <>
      <Layout />
      <ScrollRestoration />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootWrapper, // <-- We use the wrapper here now
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "services",
        Component: ServicesPage,
      },
      {
        path: "seo",
        Component: SEOPage,
      },
      {
        path: "ads",
        Component: AdsPage,
      },
      {
        path: "social-media",
        Component: SocialMediaPage,
      },
      {
        path: "google-business",
        Component: GoogleBusinessProfilePage,
      },
      {
        path: "shadow-operating",
        Component: ShadowOperatingPage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "blog",
        children: [
          {
            index: true,
            Component: BlogPage,
          },
          {
            path: ":slug",
            Component: BlogPostPage,
          }
        ]
      },
      {
        path: "*",
        Component: () => <div className="p-20 text-center"><h1>404 - Page Not Found</h1></div>
      }
    ],
  },
]);
