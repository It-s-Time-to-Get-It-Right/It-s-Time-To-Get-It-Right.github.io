import { useState } from "react";
import { Github, FileText, Database, Copy, Check } from "lucide-react";

function App() {
  const [copied, setCopied] = useState(false);

  const bibtex = `@inproceedings{}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdf8f6] text-slate-900 font-sans selection:bg-primary-200 selection:text-primary-900">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <img
              src="/assets/mascot.png"
              alt="Owl Mascot"
              className="w-24 h-24 md:w-32 md:h-32 object-contain shrink-0"
            />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight text-center md:text-left whitespace-nowrap">
              It's Time To Get It Right
            </h1>
          </div>

          <div className="inline-flex items-center gap-2 px-3 rounded-full bg-primary-100/50 text-primary-700 text-sm font-medium mb-8 border border-primary-200/50">
            <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
            CVPR 2026 Findings
          </div>

          <div className="flex flex-col items-center justify-center text-slate-800 mb-10">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg md:text-xl font-medium mb-3">
              <a href="#" className="hover:text-primary-600 transition-colors">
                Jaeha Choi<sup className="text-sm ml-0.5">1*</sup>
              </a>
              <a href="#" className="hover:text-primary-600 transition-colors">
                Jin Won Lee<sup className="text-sm ml-0.5">2*</sup>
              </a>
              <a href="#" className="hover:text-primary-600 transition-colors">
                Siwoo You<sup className="text-sm ml-0.5">1</sup>
              </a>
              <a href="#" className="hover:text-primary-600 transition-colors">
                Jangho Lee<sup className="text-sm ml-0.5">1</sup>
              </a>
            </div>

            <div className="text-sm md:text-base mb-2">
              <span>
                <sup className="mr-0.5 font-bold">*</sup>Equal contribution
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-sm md:text-base text-slate-600 font-normal mb-5">
              <div className="flex items-center gap-1.5">
                <sup className="text-xs">1</sup> Incheon National University,
                Incheon, Republic of Korea
              </div>
              <div className="flex items-center gap-1.5">
                <sup className="text-xs">2</sup> McGill University, Montreal,
                Canada
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Paper
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-700 font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Code
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-700 font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm group"
            >
              <Database className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Dataset
            </a>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Abstract
            </h2>
            <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto" />
          </div>

          <div className="prose prose-lg prose-slate mx-auto text-slate-600 text-justify leading-relaxed">
            <p className="mb-6">
              Advances in vision-language models (VLMs) have achieved remarkable
              success on complex multimodal reasoning tasks, leading to the
              assumption that they should also ex- cel at reading analog clocks.
              However, contrary to this ex- pectation, our study reveals that
              reading analog clocks in real-world environments remains a
              significant challenge for state-of-the-art VLMs. Existing analog
              clock datasets are largely synthetic or planar with limited
              stylistic diversity and minimal background context, failing to
              capture the vi- sual variability of real-world scenes. As a
              result, VLMs trained on such data exhibit weak spatial-temporal
              reason- ing, frequently confusing the hour and minute hands and
              struggling under common visual conditions such as oc- clusion,
              lighting variation, and cluttered backgrounds. To address this
              issue, we introduce TickTockVQA, a human- annotated dataset
              containing analog clocks in diverse real- world scenarios.
              TickTockVQA provides explicit hour and minute annotations, and
              includes an AM/PM tag when it is inferable from the visual
              context. Furthermore, we propose Swap-DPO, a direct preference
              optimization based fine- tuning framework to align model reasoning
              toward accu- rate time interpretation. Experimental results
              demonstrate that our approach substantially enhances clock reading
              ac- curacy and robustness under real-world conditions, estab-
              lishing a foundation for future research on spatial-temporal
              reasoning and visual understanding in VLMs. The dataset and code
              will be publicly released upon publication.
            </p>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section
        id="method"
        className="py-16 md:py-20 bg-white border-t border-slate-100"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Methodology
            </h2>
            <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto" />
          </div>

          <div className="bg-slate-50 rounded-3xl aspect-[16/9] mb-12 flex items-center justify-center text-slate-400 font-medium text-lg border border-slate-200">
            [ Architecture Diagram Placeholder ]
          </div>

          <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed text-justify">
            <p className="mb-6">Explaination of the method here</p>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section
        id="citation"
        className="py-16 md:py-20 bg-white border-t border-primary-100 text-slate-700"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-slate-900">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Citation
            </h2>
            <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto" />
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 font-mono text-sm shadow-sm ring-1 ring-slate-200 overflow-x-auto relative group">
            <button
              onClick={copyToClipboard}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/80 hover:bg-white text-slate-500 hover:text-primary-600 border border-slate-200 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 focus:opacity-100 flex items-center justify-center"
              aria-label="Copy citation"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
            <pre className="text-slate-700 leading-relaxed pr-10">
              <code>{bibtex}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Footer / Simple spacing for now */}
      <footer className="py-8 md:py-12 bg-white text-center text-sm border-t border-primary-100 text-slate-500">
        <p className="mb-2">
          © 2026 Jaeha Choi, Jin Won Lee, Siwoo You, and Jangho Lee. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
