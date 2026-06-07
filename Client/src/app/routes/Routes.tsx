import { createBrowserRouter } from "react-router-dom";
import Catalog from "../../features/catalog/Catalog";
import App from "../layout/App";
import AboutPage from "../../features/about/AboutPage";
import HomePage from "../../features/home/HomePage";
import ContactPage from "../../features/contact/ContactPage";
import ProductDetails from "../../features/catalog/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/catalog", element: <Catalog /> },
      { path: "/catalog/:id", element: <ProductDetails /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: " ", element: <HomePage /> },
    ],
  },
]);
