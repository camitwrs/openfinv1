import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Mail,
  Building2,
  Users,
  Lightbulb,
  Loader2, // Icono de spinner
  CheckCircle, // Icono de éxito
  XCircle, // Icono de error
  Send, // Icono para el estado normal de envío
} from "lucide-react";

import { postInscripcionAcademico } from "../api/academicos.js";

export default function AcademicosForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombreApellido: "",
    correoElectronico: "",
    unidadAcademica: "",
    otraUnidad: "",
    capacidadesID: "",
    acompanante: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const unidadesAcademicas = [
    "Escuela de Ingeniería de Construcción y Transporte",
    "Escuela de Ingeniería Eléctrica",
    "Escuela de Ingeniería Mecánica",
    "Escuela de Ingeniería Química",
    "Escuela de Ingeniería Bioquímica",
    "Escuela de Ingeniería Industrial",
    "Escuela de Ingeniería Informática",
    "Escuela de Ingeniería Civil",
    "Otra...",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "nombreApellido",
      "correoElectronico",
      "unidadAcademica",
      "capacidadesID",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "Este campo es obligatorio";
      }
    });

    if (
      formData.correoElectronico &&
      !/\S+@\S+\.\S+/.test(formData.correoElectronico)
    ) {
      newErrors.correoElectronico = "Ingrese un correo electrónico válido";
    }

    if (formData.unidadAcademica === "Otra..." && !formData.otraUnidad.trim()) {
      newErrors.otraUnidad = "Por favor especifique la unidad académica";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: "", text: "" }); // Limpiar mensajes anteriores
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await postInscripcionAcademico(formData);
      setSubmitMessage({
        type: "success",
        text: response.message || "¡Inscripción enviada con éxito!",
      });
      // Limpiar el formulario después del éxito
      setFormData({
        nombreApellido: "",
        correoElectronico: "",
        unidadAcademica: "",
        otraUnidad: "",
        capacidadesID: "",
        acompanante: "",
      });
      // Opcional: Desaparecer el mensaje de éxito después de X segundos
      setTimeout(() => setSubmitMessage({ type: "", text: "" }), 5000); // 5 segundos
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitMessage({
        type: "error",
        text: error.message || "Ocurrió un error al enviar la inscripción.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determinar el icono y el texto del botón
  const getButtonContent = () => {
    if (isSubmitting) {
      return (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando...
        </>
      );
    }
    if (submitMessage.type === "success") {
      return (
        <>
          <CheckCircle className="mr-2 h-4 w-4" />
          ¡Enviado!
        </>
      );
    }
    if (submitMessage.type === "error") {
      return (
        <>
          <XCircle className="mr-2 h-4 w-4" />
          Error al Enviar
        </>
      );
    }
    return (
      <>
        <Send className="mr-2 h-4 w-4" />
        Enviar Inscripción
      </>
    );
  };

  return (
    <div className="bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="border-0 shadow-xl overflow-hidden">
          <div className="relative h-32 bg-gradient-to-r from-orange-500 via-blue-600 to-teal-600">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl font-bold mb-2">
                  Formulario de Inscripción
                </h1>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  Inscripción de Investigadores/as y Académicos/as PUCV
                </Badge>
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            {/* Mensajes de feedback */}
            {submitMessage.text && (
              <div
                className={`p-4 mb-6 rounded-md ${
                  submitMessage.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-2">
                <Label
                  htmlFor="nombreApellido"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Nombre y Apellido <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nombreApellido"
                  placeholder="Ingrese su nombre completo"
                  value={formData.nombreApellido}
                  onChange={(e) =>
                    handleInputChange("nombreApellido", e.target.value)
                  }
                  className={errors.nombreApellido ? "border-red-500" : ""}
                />
                {errors.nombreApellido && (
                  <p className="text-red-500 text-xs">
                    {errors.nombreApellido}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="correoElectronico"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Correo electrónico <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="correoElectronico"
                  type="email"
                  placeholder="ejemplo@pucv.cl"
                  value={formData.correoElectronico}
                  onChange={(e) =>
                    handleInputChange("correoElectronico", e.target.value)
                  }
                  className={errors.correoElectronico ? "border-red-500" : ""}
                />
                {errors.correoElectronico && (
                  <p className="text-red-500 text-xs">
                    {errors.correoElectronico}
                  </p>
                )}
              </div>

              {/* Academic Unit */}
              <div className="space-y-4">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Unidad Académica <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={formData.unidadAcademica}
                  onValueChange={(value) =>
                    handleInputChange("unidadAcademica", value)
                  }
                  className="space-y-3"
                >
                  {unidadesAcademicas.map((unidad, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <RadioGroupItem value={unidad} id={`unidad-${index}`} />
                      <Label
                        htmlFor={`unidad-${index}`}
                        className="text-sm font-normal cursor-pointer flex-1"
                      >
                        {unidad}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.unidadAcademica && (
                  <p className="text-red-500 text-xs">
                    {errors.unidadAcademica}
                  </p>
                )}

                {/* Other Academic Unit Input */}
                {formData.unidadAcademica === "Otra..." && (
                  <div className="ml-6 space-y-2">
                    <Label htmlFor="otraUnidad" className="text-sm font-medium">
                      Especifique la unidad académica{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="otraUnidad"
                      placeholder="Ingrese el nombre de la unidad académica"
                      value={formData.otraUnidad}
                      onChange={(e) =>
                        handleInputChange("otraUnidad", e.target.value)
                      }
                      className={errors.otraUnidad ? "border-red-500" : ""}
                    />
                    {errors.otraUnidad && (
                      <p className="text-red-500 text-xs">
                        {errors.otraUnidad}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* R&D Capabilities */}
              <div className="space-y-2">
                <Label
                  htmlFor="capacidadesID"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <Lightbulb className="w-4 h-4" />
                  Describe tus capacidades de I+D aplicada en pocas palabras
                  (Keywords) <span className="text-red-500">*</span>
                </Label>
                <p className="text-xs text-slate-600 mb-2">
                  Ejemplos: Biotecnología, Nuevos materiales, impresión 3D,
                  optimización, IA, etc...
                </p>
                <Textarea
                  id="capacidadesID"
                  placeholder="Ej: Machine Learning, Optimización de procesos, Energías renovables, Biotecnología aplicada, Materiales avanzados, Automatización industrial, Análisis de datos, Simulación computacional..."
                  value={formData.capacidadesID}
                  onChange={(e) =>
                    handleInputChange("capacidadesID", e.target.value)
                  }
                  className="min-h-[120px]"
                />
              </div>

              {/* Accompanying Person */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-200">
                <div className="space-y-2">
                  <Label htmlFor="acompanante" className="text-sm font-medium">
                    Si vienes con alguien más, puedes poner su nombre acá:
                  </Label>
                  <p className="text-xs text-slate-600 mb-2">
                    (Máximo un acompañante adicional por académico/a)
                  </p>
                  <Input
                    id="acompanante"
                    placeholder="Nombre del acompañante (opcional)"
                    value={formData.acompanante}
                    onChange={(e) =>
                      handleInputChange("acompanante", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 text-lg"
                  disabled={isSubmitting || submitMessage.type === "success"} // Deshabilitar después del éxito también
                >
                  {getButtonContent()}{" "}
                  {/* Usamos la función para el contenido del botón */}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
