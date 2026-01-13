import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "./assets/Photo.jpg";
/* ================= NAVBAR ================= */
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        
        {/* LEFT: LOGO */}
        <div className="font-mono text-accent">
          {"{ IJ }"}
        </div>

        {/* RIGHT: LINKS + CTA */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-sm text-slate-300">
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Experience", href: "#experience" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-white transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-accent text-black text-sm font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}

const projects = [
  {
    title: "Income Classification Pipeline",
    description:
      "Developed a high-precision machine learning system to classify individual income levels. Performed extensive feature engineering, including log transformations to correct skewed financial data and advanced imputation using Decision Tree classifiers to handle missing values. By implementing systematic hyperparameter tuning for Random Forest and Decision Tree models, successfully increased model performance by 8% over the baseline.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/ishalijadhav/income-classifier-ml",
    link: null,
  },
  {
    title: "Scalable Workflow for Energy Data Analysis",
    description:
      "Developed a fully automated research pipeline using Snakemake to analyze the impact of temperature fluctuations on energy demand in Germany. The project demonstrates the use of modular rules to handle data cleaning, statistical modeling, and visualization, making the analysis easily adaptable to different regional datasets.",
    tech: ["Python", "Pandas", "Matplotlib", "Snakemake"],
    github: "https://gitup.uni-potsdam.de/jadhav1/rse_project2",
    link: null,
  },
  {
    title: "Containerized Regression Model for Automotive Market Analysis",
    description:
      "Implemented a machine learning pipeline to forecast vehicle market values with high precision. To ensure seamless deployment, I containerized the entire application using Docker. This approach allows the model and its dependencies to run reliably across any infrastructure.",
    tech: ["Python", "Sci-kit learn", "Matplotlib", "Docker"],
    github: "https://github.com/ishalijadhav/AIBAS-CarPricePredictionModel",
    link: null,
  },
  {
    title: "Code-Mixed Hinglish to English Translation Framework",
    description:
      "Developed and published a machine learning pipeline to translate code-mixed language. Implemented an LSTM-based language identification model achieving 90% validation accuracy to segment unstructured social media text. The framework integrates back-transliteration and Neural Machine Translation (NMT) to consolidate fragments into a unified matrix language. By adding this specialized identification layer, the system outperformed Google NMT baselines, increasing the BLEU score from 0.496 to 0.737 while significantly reducing error rates.",
    tech: ["Python", "NLP", "LSTM"],
    github: null,
    link: "https://ieeexplore.ieee.org/document/9760834",
  },
  {
    title: "Hate and Offensive Speech Detection in Hindi Twitter Corpus",
    description:
      "Developed a multi-level machine learning framework for the HASOC-2021 competition to detect and categorize hate speech in a Hindi Twitter corpus. Engineered a pipeline that performs both binary classification and fine-grained labeling. By evaluating various feature extraction methods like TF-IDF and N-grams against multiple ML classifiers, we optimized the detection of harmful content in regional language.",
    tech: ["Python", "NLP", "Machine learning"],
    github: null,
    link: "https://ceur-ws.org/Vol-3159/T1-33.pdf",
  }
];
/* ================= HERO ================= */
export default function App() {
  return (
    <div className="min-h-screen text-fg">
      <Navbar />

      <section id="about" className="pt-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center scroll-mt-24">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent mb-4">Hi, I am</p>

          <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
            Ishali{" "}
            <span className="text-accentSoft">Jadhav</span>
          </h1>

          <p className="mt-4 text-xl text-slate-300">
            Data Science Student · NLP Enthusiast
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Based in Potsdam, Germany
          </p>

          <p className="mt-6 max-w-xl text-slate-300 leading-relaxed">
            I build intelligent data products — analytics pipelines,
            machine learning models, and production-ready AI systems.
            My focus is on clean design, automation, and scalable
            solutions that turn data into action.
            I build intelligent data products — analytics pipelines,
            machine learning models, and production-ready AI systems.
            My focus is on clean design, automation, and scalable
            solutions that turn data into action.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-accent text-bg font-medium"
            >
              View Projects →
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-full border border-white/20"
            >
              Resume ↓
            </a>
          </div>

          <div className="mt-8 flex gap-4 text-slate-400">
            <Github />
            <Linkedin />
            <Mail />
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-[300px] md:w-[380px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-bg/80 border border-white/10 flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Open to Work
          </div> */}
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mt-32 max-w-7xl mx-auto px-6 md:px-8 scroll-mt-24"
      >
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Projects
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            A selection of projects showcasing my work in data science,
            machine learning, and analytics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur
                p-6
                transition
                hover:border-accent/40
                flex flex-col
              "
            >
              {/* Title — fixed height for alignment */}
              <h3 className="text-xl font-medium min-h-[3.5rem]">
                {project.title}
              </h3>

              {/* Description — grows to align cards */}
              <p className="mt-3 text-sm text-slate-300 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      text-xs
                      px-3 py-1
                      rounded-full
                      bg-white/10
                      text-slate-200
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-4 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}


