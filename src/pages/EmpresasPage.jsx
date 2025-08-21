import {
  Users,
  GraduationCap,
  Lightbulb,
  Mail,
  ArrowRight,
  Building2,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function EmpresasPage() {
  const navigate = useNavigate();

  const services = [
    {
      title: "PRACTICANTES",
      icon: Users,
      description:
        "Conecta con estudiantes talentosos para prácticas profesionales",
      path: "",
      gradient: "from-sky-500 to-sky-600",
    },
    {
      title: "TESISTAS",
      icon: GraduationCap,
      description: "Encuentra estudiantes para desarrollar proyectos de tesis",
      path: "",
      gradient: "from-sky-600 to-sky-700",
    },
    {
      title: "SOLUCIONES",
      icon: Lightbulb,
      description: "Desarrolla soluciones innovadoras con la academia",
      path: "",
      gradient: "from-sky-700 to-sky-800",
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Talento Especializado",
      description: "Accede a estudiantes y profesionales altamente capacitados",
    },
    {
      icon: Zap,
      title: "Innovación Constante",
      description:
        "Impulsa la innovación con proyectos de investigación aplicada",
    },
    {
      icon: Building2,
      title: "Colaboración Estratégica",
      description: "Establece alianzas duraderas con la academia",
    },
  ];

  const handleServiceClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:openfin@ing.pucv.cl";
  };

  const handleInscripcionClick = () => {
    navigate("/empresas/inscripcion");
  };

  return (
    <div className="bg-slate-100 py-8">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100/30 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-100/20 rounded-full translate-y-24 -translate-x-24"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-10">
          {/* Header */}
          {/* Contenedor Flex para el Título y el Botón de Inscripción */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-10 text-center lg:text-left">
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <div className="inline-block mb-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-sky-900 mb-1">
                  Empresas
                </h1>
                <div className="h-0.5 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-full w-32 mx-auto lg:mx-0"></div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-sky-600 bg-clip-text text-transparent mb-6 leading-tight">
                lo que buscas a un click.
              </h2>
              <p className="text-base text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Conectamos empresas con talento académico especializado para
                impulsar la innovación y el crecimiento empresarial
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end justify-center gap-4 max-w-sm lg:w-1/2">
              <p className="text-lg md:text-xl font-semibold text-slate-700 text-center lg:text-right">
                ¿Eres una empresa u organización y quieres participar?
              </p>
              <Button
                onClick={handleInscripcionClick}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-6 rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 text-xl uppercase w-full sm:w-auto"
              >
                Inscribe tu Organización
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Services Cards - COMPACTADAS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <Card
                  key={index}
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 bg-gradient-to-br ${service.gradient} text-white relative overflow-hidden opacity-90 hover:opacity-100`}
                  onClick={() => handleServiceClick(service.path)}
                >
                  <CardContent className="p-4 relative z-10">
                    {" "}
                    {/* Reduje el padding de p-4 a p-3 */}
                    {/* Background decoration - reduje el tamaño y traslación */}
                    <div className="absolute top-0 right-0 w-14 h-14 bg-white/10 rounded-full -translate-y-6 translate-x-6 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-3 p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                        {" "}
                        {/* Reduje padding y margen */}
                        <IconComponent className="w-5 h-5" />{" "}
                        {/* Reduje el tamaño del icono */}
                      </div>
                      <h3 className="text-lg font-bold mb-2 tracking-wide">
                        {" "}
                        {/* Reduje tamaño y margen */}
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-xs leading-relaxed mb-3">
                        {" "}
                        {/* Reduje tamaño y margen */}
                        {service.description}
                      </p>
                      <div className="flex items-center text-white/80 group-hover:text-white transition-colors text-xs">
                        {" "}
                        {/* Reduje el tamaño del texto */}
                        <span className="mr-1 font-medium">Explorar</span>{" "}
                        {/* Reduje margen */}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />{" "}
                        {/* Reduje el tamaño del icono */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
              ¿Por qué elegir nuestra plataforma?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;

                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full mb-4 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-sky-600 to-sky-700 text-white border-0 shadow-xl">
            <CardContent className="p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 -translate-x-12"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  ¿Listo para comenzar?
                </h3>
                <p className="text-sky-100 mb-4 text-base">
                  Contáctanos para conocer más sobre nuestros servicios
                </p>
                <Button
                  onClick={handleEmailClick}
                  className="bg-white text-sky-600 hover:bg-sky-50 font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 text-base"
                >
                  openfin@ing.pucv.cl
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
