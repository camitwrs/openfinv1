import { useNavigate, Link } from "react-router-dom";
import {
  GraduationCap,
  Building2,
  ChevronRight,
  Users,
  ArrowRight,
} from "lucide-react";

// CORRECCIÓN DE RUTAS: Se reemplaza el alias "@/" por rutas relativas "../"
import { SoundWaveAnimation } from "../components/ui/sound-wave-animation";
import { GradientBackground } from "../components/ui/gradient-background";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    // min-h-screen y bg-slate-50 ya aseguran el fondo
    <div className="flex min-h-screen bg-slate-50 flex-col">
      <GradientBackground />

      <main className="flex-1">
        <section className="relative flex items-center justify-center min-h-[calc(100vh-64px)] py-20 overflow-hidden">
          {/* Posicionamiento y transformación de la animación para ser central */}
          <SoundWaveAnimation className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="flex flex-col items-center gap-2 text-center relative z-10 px-4 sm:px-6 lg:px-8">
            {/* Etiqueta de Plataforma */}
            <div className="rounded-full bg-blue-600/10 mb-2 tracking-widest backdrop-blur-sm px-3 py-1.5 text-xs sm:text-sm font-medium text-sky-800 border border-sky-500/20">
              Plataforma de Vinculación Universidad-Empresa PUCV
            </div>

            {/* Título Principal */}
            <div className="hero-glow">
              <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-8xl xl:text-9xl">
                <span className="text-blue-900">OPEN</span>
                <span className="text-sky-600">FIN</span>
              </h1>
            </div>

            {/* Subtítulo principal */}
            <p className="leading-normal max-w-xl sm:max-w-2xl text-base sm:text-xl md:text-2xl glass-effect p-3 sm:p-4 text-sky-900 font-bold tracking-wider uppercase rounded-xl">
              Conecta tus Desafíos con el Talento Académico e Industrial
            </p>

            {/* Descripción */}
            <p className="max-w-[36rem] leading-snug tracking-wider text-gray-800 text-sm sm:text-lg xl:text-xl mt-2">
              Canaliza el poder de la investigación
              universitaria para obtener soluciones concretas y de alto impacto.
            </p>

            {/* Contenedor de Botones */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-10 w-full max-w-3xl px-4">
              {/* Botón Estudiante */}
              <Button
                size="lg"
                className="w-full md:w-auto xl:w-64 bg-gradient-to-r from-cyan-500/90 to-cyan-600/80 hover:from-cyan-400 hover:to-cyan-500 text-white backdrop-blur-sm rounded-full px-8 py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                asChild
              >
                <Link to="/estudiantes">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Soy Estudiante
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              {/* Botón Empresa */}
              <Button
                size="lg"
                className="w-full md:w-auto xl:w-64 bg-gradient-to-r from-sky-500/90 to-sky-600/80 hover:from-sky-400 hover:to-sky-500 text-white backdrop-blur-sm rounded-full px-8 py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                asChild
              >
                <Link to="/empresas">
                  <Building2 className="mr-2 h-5 w-5" />
                  Soy Empresa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              {/* Botón Académico/a */}
              <Button
                size="lg"
                className="w-full md:w-auto xl:w-64 bg-gradient-to-r from-blue-500/90 to-blue-600/80 hover:from-blue-400 hover:to-blue-500 text-white backdrop-blur-sm rounded-full px-8 py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                asChild
              >
                <Link to="/academicos">
                  <Users className="mr-2 h-5 w-5" />
                  Soy Académico/a
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
