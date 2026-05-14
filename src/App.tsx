import { useState, useEffect } from "react";
import minhFoto from "./assets/image/Eu.png";
import curriculoPDF from "./assets/docs/Curriculo_Josiel_Soares_QA_2026.pdf";
import { motion, AnimatePresence } from "motion/react";
import { Experience, Skill, Certification } from "./types";
import {
  ShieldCheck,
  Bug,
  Database,
  Terminal,
  Cloud,
  CheckSquare,
  Mail,
  Download,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Code2,
} from "lucide-react";

const experiences: Experience[] = [
  {
    company: "Nota Control Tecnologia",
    role: "QA Tester",
    period: "2025 — Present",
    description:
      "Leading software quality assurance initiatives for fiscal systems. Executing rigorous manual testing and transitioning towards automated frameworks to ensure stability and compliance.",
    tags: ["SQL Server", "Postman", "Azure DevOps", "Scrum"],
    color: "border-emerald-400",
  },
  {
    company: "Unisys Corporation",
    role: "IT Support Analyst",
    period: "2017 — 2023",
    description:
      "Technical support and infrastructure monitoring. Developed a deep understanding of system architectures and performance bottlenecks, laying the groundwork for a transition to specialized QA.",
    tags: ["Troubleshooting", "Windows Server", "Network Protocols"],
    color: "border-blue-500",
  },
  {
    company: "Omega Distribuidora",
    role: "Web Designer - Estagiário",
    period: "2017 — 2023",
    description:
      "Technical support and infrastructure monitoring. Developed a deep understanding of system architectures and performance bottlenecks, laying the groundwork for a transition to specialized QA.",
    tags: ["Troubleshooting", "Windows Server", "Network Protocols"],
    color: "border-blue-500",
  },
];

const skills: Skill[] = [
  {
    title: "Teste de Regressão",
    description:
      "Ensuring new deployments don't disrupt existing functionality through systematic, multi-layered verification processes.",
    icon: "Bug",
    variant: "surface",
  },
  {
    title: "Teste de API",
    description:
      "Proficient in Postman and Swagger for RESTful service validation.",
    icon: "Code2",
    variant: "primary",
  },
  {
    title: " MS SQL SERVER",
    description:
      "Complex queries and data integrity validation within SQL Server environments.",
    icon: "Database",
    variant: "surface",
  },
  {
    title: " Padrão BDD / Gherkin",
    description:
      "Writing clear, human-readable test scenarios that align business logic with technical execution.",
    icon: "Terminal",
    variant: "surface",
  },
  {
    title: "Infrastructure Awareness",
    description:
      "Hands-on experience with AWS cloud monitoring and Windows Server administration to better understand environment-specific issues.",
    icon: "Cloud",
    variant: "surface",
  },
  {
    title: "Process QA",
    description: "Agile/Scrum mastery for seamless team integration.",
    icon: "CheckSquare",
    variant: "accent",
  },
];

const certifications: Certification[] = [
  {
    title: "Ciência da Computação",
    year: "2020",
    issuer: "Uniderp",
    borderColor: "border-[#2c3e50]",
  },
  {
    title: "Microsoft SQL Server",
    year: "2026",
    issuer: "Nota Control Tecnologia",
    borderColor: "border-[#002e1d]",
  },
  {
    title: "AWS Cloud Practitioner",
    year: "2026",
    issuer: "Amazon Web Services",
    borderColor: "border-[#162839]",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const IconComponent = ({
    name,
    className,
  }: {
    name: string;
    className?: string;
  }) => {
    const icons: Record<string, any> = {
      Bug,
      Code2,
      Database,
      Terminal,
      Cloud,
      CheckSquare,
    };
    const Icon = icons[name] || Bug;
    return <Icon className={className} />;
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans text-[#191c1e] selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/60 backdrop-blur-md shadow-sm py-3" : "bg-white/90 backdrop-blur-md shadow-sm py-3"}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tighter text-slate-900"
          >
            JOSIEL SOARES
          </motion.span>

          <div className="hidden md:flex items-center gap-10">
            {["Experience", "Skills", "Certifications", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              ),
            )}
            <button className="bg-[#162839] text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:opacity-90 active:scale-95 transition-all">
              Hire Me
            </button>
          </div>

          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {["Experience", "Skills", "Certifications", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-black tracking-tighter text-slate-900"
                  >
                    {item}
                  </a>
                ),
              )}
              <button className="bg-[#162839] text-white py-4 rounded-xl font-bold text-lg">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 bg-gradient-to-br from-[#162839] to-[#2c3e50] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-6 leading-[0.85]">
              Josiel <br />
              Soares
            </h1>
            <p className="text-2xl text-slate-300 font-medium mb-10 flex items-center gap-3">
              Quality Assurance{" "}
              <span className="w-8 h-[1px] bg-emerald-400"></span> Software
              Quality
            </p>
            <div className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 max-w-xl">
              <p className="text-slate-300 leading-relaxed text-lg">
                Profissional dedicado a garantir a entrega de software de alta
                qualidade por meio de análises criteriosas, casos de teste
                abrangentes e validações de regras de negócios. Com experiência
                em ambientes ágeis (Scrum), sempre busco aprimorar processos e
                colaborar ativamente com a equipe de desenvolvimento para
                alcançar a excelência em cada projeto.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] bg-white/5 rounded-[2rem] overflow-hidden shadow-2xl relative border border-white/10">
              <img
                src={minhFoto}
                alt="Professional"
                className="w-full h-full object-cover transition-all duration-3000 ease-out delay-2000"
                style={{ filter: "grayscale(100%)" }} // Estado Inicial: totalmente cinza
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  // Quando a imagem carrega, aplicamos um delay e depois removemos o grayscale
                  e.currentTarget.style.transition = "filter 2s ease-out 2s"; // Transição de 3s, delay de 2s
                  e.currentTarget.style.filter = "grayscale(0%)"; // Estado Final: cores originais
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#162839]/80 via-transparent to-transparent"></div>
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 rounded-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-400 bg-emerald-500/75 px-4 py-1.5 rounded-full mb-8 border border-emerald-400/20">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                  Precision QA Engineering
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-emerald-400/20 font-black text-6xl block -mb-8 select-none">
              01
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-[#162839] tracking-tighter relative z-10">
              Jornada Professional
            </h2>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="grid md:grid-cols-[1fr_2.5fr] gap-8 md:gap-24">
                  <div className="md:text-right pt-2">
                    <h3 className="text-2xl font-black text-[#162839] mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase">
                      {exp.role}
                    </p>
                    <p className="text-slate-400 text-sm mt-3 font-medium">
                      {exp.period}
                    </p>
                  </div>
                  <div
                    className={`bg-[#f7f9fb] p-10 rounded-2xl border-l-8 ${exp.color} group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300`}
                  >
                    <p className="text-slate-600 leading-relaxed text-lg mb-8">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-5 py-1.5 bg-white rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest shadow-sm border border-slate-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-12 bg-[#f2f4f6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black text-[#162839] tracking-tighter mb-4">
              Arsenal Técnico
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Um conjunto de ferramentas, projetado para garantia de qualidade
              de ponta a ponta em diversos ambientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                  skill.variant === "primary"
                    ? "bg-[#162839] text-white lg:col-span-1 shadow-2xl"
                    : skill.variant === "accent"
                      ? "bg-emerald-400 text-[#162839] lg:col-span-1"
                      : "bg-white text-[#162839] shadow-sm"
                } ${index === 0 ? "lg:col-span-2" : ""} ${index === 4 ? "lg:col-span-2" : ""}`}
              >
                <div>
                  <div
                    className={`mb-8 w-14 h-14 rounded-2xl flex items-center justify-center ${
                      skill.variant === "primary"
                        ? "bg-white/10"
                        : skill.variant === "accent"
                          ? "bg-[#162839]/10"
                          : "bg-slate-100"
                    }`}
                  >
                    <IconComponent
                      name={skill.icon}
                      className={`w-7 h-7 ${
                        skill.variant === "primary"
                          ? "text-emerald-400"
                          : skill.variant === "accent"
                            ? "text-[#162839]"
                            : "text-blue-600"
                      }`}
                    />
                  </div>
                  <h3 className="text-2xl font-black mb-3 tracking-tight">
                    {skill.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      skill.variant === "primary"
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-6xl font-black text-[#162839] tracking-tighter">
                Certificações
              </h2>
              <p className="text-slate-500 mt-4 text-lg">
                Continuous professional development and industry validation.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#162839] hover:text-white transition-all group">
                <ChevronLeft className="group-active:scale-90 transition-transform" />
              </button>
              <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#162839] hover:text-white transition-all group">
                <ChevronRight className="group-active:scale-90 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`p-6 bg-[#f7f9fb] rounded-[2.5rem] border-[16px] ${cert.borderColor} shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  <div className="aspect-[4/3] bg-white rounded-2xl flex items-center justify-center flex-col gap-4 text-slate-300 mb-8 relative overflow-hidden">
                    <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center">
                      <ShieldCheck size={40} className="opacity-20" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                      Official Credential
                    </span>
                    <div className="absolute inset-0 bg-[#162839]/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                      <button className="bg-white text-[#162839] px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-xl">
                        <ExternalLink size={16} />
                        Verify Credential
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pb-2">
                    <h4 className="text-xl font-black text-[#162839] mb-1">
                      {cert.title}
                    </h4>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-blue-600 font-bold">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-slate-400 font-bold">
                        {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-32 px-6 md:px-12 bg-[#162839] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-400 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter leading-tight"
          >
            Vamos elevar a qualidade do seu software?
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-emerald-400 text-[#162839] px-12 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-emerald-400/20"
            >
              <Mail size={24} />
              Entre em Contato
            </motion.button>
            <a
              href={curriculoPDF}
              download="Curriculo_Josiel_Soares_QA.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-colors"
            >
              <Download size={24} />
              Download CV
            </motion.button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-black tracking-tighter text-[#162839]">
              JOSIEL SOARES
            </span>
            <p className="text-xs font-bold tracking-[0.2em] text-slate-400 mt-3 uppercase">
              © 2024 JOSIEL SOARES. THE PRECISION EDITORIAL.
            </p>
          </div>

          <div className="flex gap-12">
            {socialLinks.map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm font-bold tracking-widest text-slate-400 hover:text-emerald-500 transition-colors uppercase"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

const socialLinks = ["LinkedIn", "GitHub", "Email"];
