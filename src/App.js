import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/Contact/Faqs";
import Categorie from "./components/Catalogue/Page";
import ProductListWithCategories from "./components/Catalogue/Page";
import ProductListWithFilters from "./components/Catalogue/ListPro";
import ProductDetail from "./components/Catalogue/ProductDetails";
import Abouttest from "./components/about/AboutTest";

function AnimatedRoutes() {
  const location = useLocation(); // Détecte la route actuelle

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <Abouttest />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/FAQ"
          element={
            <PageTransition>
              <FAQ />
            </PageTransition>
          }
        />
        <Route
          path="/catalogue"
          element={
            <PageTransition>
              <ProductListWithCategories />
            </PageTransition>
          }
        />
          <Route
          path="/catalogue/:idcode"
          element={
            <PageTransition>
              <ProductListWithFilters />
            </PageTransition>
          }
        />    <Route
        path="/product/:id"
        element={
          <PageTransition>
            <ProductDetail />
          </PageTransition>
        }
      />
      </Routes>
      
    </AnimatePresence>
  );
}

// Animation avec un effet de "révélation"
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }} // Début : réduit et décalé vers le bas
      animate={{ opacity: 1, scale: 1, y: 0 }} // Fin : normal et centré
      exit={{ opacity: 0, scale: 1.1, y: -30 }} // Sortie : léger agrandissement et montée
      transition={{ duration: 0.6, ease: "easeOut" }} // Durée et fluidité
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}
