import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/components/Navbar";
import ActividadesPage from "./pages/ActividadesPage";
import HomePage from "./pages/HomePage";
import EstudiantesPage from "./pages/EstudiantesPage";
import AcademiaIDPage from "./pages/AcademiaIDPage";
import AcademiaEBCTPage from "./pages/AcademiaEBCTPage";
import EmpresasPage from "./pages/EmpresasPage";
import AcademicosPage from "./pages/AcademicosPage";
import Footer from "./pages/components/Footer";
import EmpresasForm from "./pages/EmpresasForm";
import VentureStudioPage from "./pages/VentureStudioPage";
import AcademicosForm from "./pages/AcademicosForm";
import DesafiosPage from "./pages/DesafiosPage";
import DesafiosForm from "./pages/DesafiosForm";
import ConectaTalentoPage from "./pages/ConnectaTalentoPage";
import CalendarioPage from "./pages/CalendarioPage";
import NoticiasPage from "./pages/NoticiasPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/actividades" element={<ActividadesPage />} /> */}
            <Route path="/desafios" element={<DesafiosPage />} />
            <Route path="/desafios/inscripcion" element={<DesafiosForm />} />
            <Route path="/estudiantes" element={<EstudiantesPage />} />
            <Route path="/actividades" element={<ActividadesPage />} />
            <Route path="/actividades/noticias" element={<NoticiasPage />} />
            <Route
              path="/estudiantes/academia-id"
              element={<AcademiaIDPage />}
            />
            <Route
              path="/estudiantes/academia-ebct"
              element={<AcademiaEBCTPage />}
            />
            <Route
              path="/estudiantes/venture-studio"
              element={<VentureStudioPage />}
            />
            <Route
              path="/estudiantes/conecta-talento"
              element={<ConectaTalentoPage />}
            />
            <Route path="/empresas" element={<EmpresasPage />} />
            {/* <Route path="/empresas/inscripcion" element={<EmpresasForm />} /> */}
            {/* <Route path="/academicos" element={<AcademicosPage />} />
            <Route
              path="/academicos/inscripcion"
              element={<AcademicosForm />}
            />
            */}
            <Route
              path="/actividades/calendario"
              element={<CalendarioPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
