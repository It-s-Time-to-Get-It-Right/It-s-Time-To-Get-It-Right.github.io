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

      {/* Qualitative Results */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Qualitative Results
            </h2>
            <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto" />
          </div>

          <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed text-center mb-10">
            <p>
              Comparison of model predictions on the clock reading task. Our
              model, It's Time To Get It Right (ITGR), correctly identifies the
              time, while other large multimodal models, Llama-3.2-11B
              Zero-shot, GPT-5, Claude Sonnet 4.5, Gemini-2.5 Pro, and Perplexity
              Pro, produce incorrect results.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <img
              src="/assets/qualitative_results.png"
              alt="Qualitative results: model comparison on clock reading"
              className="w-full h-auto rounded-xl shadow-sm border border-slate-200"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Main Results Table */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Comprehensive Evaluation
            </h2>
            <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto" />
          </div>

          <div className="prose prose-sm prose-slate mx-auto text-slate-600 text-center mb-8">
            <p>
              Comprehensive evaluation results for Gemma3-12B, Qwen2.5-VL-7B,
              and Llama-3.2-11B on the TickTockVQA test set. <strong>B</strong>{" "}
              and <strong>S</strong> denote baseline and swap-equivalence
              evaluation, respectively.
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <table className="w-full text-sm text-left text-slate-600 border-collapse min-w-[1000px]">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b-2 border-slate-200">
                <tr>
                  <th
                    rowSpan={2}
                    className="px-4 py-3 font-semibold text-slate-900"
                  >
                    Model & Training Stages
                  </th>
                  <th
                    colSpan={2}
                    className="px-4 py-3 text-center border-l border-slate-200 font-semibold"
                  >
                    Hour Acc
                  </th>
                  <th
                    colSpan={2}
                    className="px-4 py-3 text-center border-l border-slate-200 font-semibold"
                  >
                    Minute Acc
                  </th>
                  <th
                    colSpan={2}
                    className="px-4 py-3 text-center border-l border-slate-200 font-semibold"
                  >
                    Full Time Acc
                  </th>
                  <th
                    colSpan={2}
                    className="px-4 py-3 text-center border-l border-slate-200 font-semibold"
                  >
                    MAE↓ (hour)
                  </th>
                  <th
                    colSpan={2}
                    className="px-4 py-3 text-center border-l border-slate-200 font-semibold"
                  >
                    MAE↓ (minute)
                  </th>
                  <th
                    colSpan={2}
                    className="px-4 py-3 text-center border-l border-slate-200 font-semibold"
                  >
                    MAE↓ (total)
                  </th>
                </tr>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-2 py-2 text-center border-l border-slate-200 font-medium">
                    B
                  </th>
                  <th className="px-2 py-2 text-center font-medium">S</th>
                  <th className="px-2 py-2 text-center border-l border-slate-200 font-medium">
                    B
                  </th>
                  <th className="px-2 py-2 text-center font-medium">S</th>
                  <th className="px-2 py-2 text-center border-l border-slate-200 font-medium">
                    B
                  </th>
                  <th className="px-2 py-2 text-center font-medium">S</th>
                  <th className="px-2 py-2 text-center border-l border-slate-200 font-medium">
                    B
                  </th>
                  <th className="px-2 py-2 text-center font-medium">S</th>
                  <th className="px-2 py-2 text-center border-l border-slate-200 font-medium">
                    B
                  </th>
                  <th className="px-2 py-2 text-center font-medium">S</th>
                  <th className="px-2 py-2 text-center border-l border-slate-200 font-medium">
                    B
                  </th>
                  <th className="px-2 py-2 text-center font-medium">S</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {/* Gemma3-12B */}
                <tr className="bg-slate-50/50">
                  <td
                    colSpan={13}
                    className="px-4 py-2 font-bold text-slate-800"
                  >
                    Gemma3-12B
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2 pl-8">Gemma3-12B</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">13.00</td>
                  <td className="px-2 py-2 text-center">20.75</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">10.62</td>
                  <td className="px-2 py-2 text-center">19.36</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">2.12</td>
                  <td className="px-2 py-2 text-center">3.05</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">2.61</td>
                  <td className="px-2 py-2 text-center">2.59</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">14.43</td>
                  <td className="px-2 py-2 text-center">14.32</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">156.49</td>
                  <td className="px-2 py-2 text-center">155.10</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2 pl-8">w/ TickTockVQA</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">46.37</td>
                  <td className="px-2 py-2 text-center underline">55.04</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">54.39</td>
                  <td className="px-2 py-2 text-center underline">65.68</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">34.21</td>
                  <td className="px-2 py-2 text-center underline">37.11</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-slate-900">1.35</td>
                  <td className="px-2 py-2 text-center font-bold text-slate-900">1.27</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">6.68</td>
                  <td className="px-2 py-2 text-center underline">6.34</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-slate-900">81.66</td>
                  <td className="px-2 py-2 text-center font-bold text-slate-900">77.26</td>
                </tr>
                <tr className="bg-primary-50/30 hover:bg-primary-50/50 transition-colors">
                  <td className="px-4 py-2 pl-8 font-medium">w/ Swap-DPO</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">46.67</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">56.01</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">57.54</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">67.64</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">35.32</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">37.89</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">1.36</td>
                  <td className="px-2 py-2 text-center underline">1.29</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">6.16</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">5.85</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">81.86</td>
                  <td className="px-2 py-2 text-center underline">77.97</td>
                </tr>

                {/* Qwen2.5-VL-7B */}
                <tr className="bg-slate-50/50 border-t-2 border-slate-200">
                  <td
                    colSpan={13}
                    className="px-4 py-2 font-bold text-slate-800"
                  >
                    Qwen2.5-VL-7B
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2 pl-8">Qwen2.5-VL-7B</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">17.65</td>
                  <td className="px-2 py-2 text-center">25.26</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">22.44</td>
                  <td className="px-2 py-2 text-center">32.14</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">6.04</td>
                  <td className="px-2 py-2 text-center">7.26</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">2.47</td>
                  <td className="px-2 py-2 text-center">2.44</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">11.96</td>
                  <td className="px-2 py-2 text-center">11.81</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">148.62</td>
                  <td className="px-2 py-2 text-center">146.76</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2 pl-8">w/ SynClock</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">28.11</td>
                  <td className="px-2 py-2 text-center">37.51</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">35.68</td>
                  <td className="px-2 py-2 text-center">47.17</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">16.12</td>
                  <td className="px-2 py-2 text-center">18.28</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">2.15</td>
                  <td className="px-2 py-2 text-center">2.09</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">9.60</td>
                  <td className="px-2 py-2 text-center">9.35</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">129.51</td>
                  <td className="px-2 py-2 text-center">126.34</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2 pl-8">w/ CtrlClock</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">25.16</td>
                  <td className="px-2 py-2 text-center">33.81</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">37.45</td>
                  <td className="px-2 py-2 text-center">46.85</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">14.75</td>
                  <td className="px-2 py-2 text-center">17.08</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">2.18</td>
                  <td className="px-2 py-2 text-center">2.11</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">9.58</td>
                  <td className="px-2 py-2 text-center">9.28</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">131.14</td>
                  <td className="px-2 py-2 text-center">127.20</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2 pl-8">w/ TickTockVQA</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">33.18</td>
                  <td className="px-2 py-2 text-center underline">42.94</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">41.51</td>
                  <td className="px-2 py-2 text-center underline">52.70</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">20.34</td>
                  <td className="px-2 py-2 text-center underline">22.76</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">1.73</td>
                  <td className="px-2 py-2 text-center underline">1.66</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">8.53</td>
                  <td className="px-2 py-2 text-center underline">8.19</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">104.31</td>
                  <td className="px-2 py-2 text-center underline">100.20</td>
                </tr>
                <tr className="bg-primary-50/30 hover:bg-primary-50/50 transition-colors">
                  <td className="px-4 py-2 pl-8 font-medium">w/ Swap-DPO</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">35.39</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">44.98</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">46.16</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">55.29</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">23.06</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">25.08</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">1.61</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">1.55</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">7.24</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">7.01</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">96.42</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">93.37</td>
                </tr>

                {/* Llama-3.2-11B */}
                <tr className="bg-slate-50/50 border-t-2 border-slate-200">
                  <td
                    colSpan={13}
                    className="px-4 py-2 font-bold text-slate-800"
                  >
                    Llama-3.2-11B
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2 pl-8">Llama-3.2-11B</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">11.49</td>
                  <td className="px-2 py-2 text-center">18.35</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">8.58</td>
                  <td className="px-2 py-2 text-center">16.85</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">1.41</td>
                  <td className="px-2 py-2 text-center">2.02</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">2.59</td>
                  <td className="px-2 py-2 text-center">2.57</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">14.79</td>
                  <td className="px-2 py-2 text-center">14.70</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">156.96</td>
                  <td className="px-2 py-2 text-center">155.67</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2 pl-8">w/ SynClock</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">32.55</td>
                  <td className="px-2 py-2 text-center">40.67</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">39.24</td>
                  <td className="px-2 py-2 text-center">47.04</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">22.09</td>
                  <td className="px-2 py-2 text-center">23.80</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">2.10</td>
                  <td className="px-2 py-2 text-center">2.04</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">9.77</td>
                  <td className="px-2 py-2 text-center">9.54</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">126.77</td>
                  <td className="px-2 py-2 text-center">123.79</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2 pl-8">w/ CtrlClock</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">33.28</td>
                  <td className="px-2 py-2 text-center">40.10</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">40.10</td>
                  <td className="px-2 py-2 text-center">50.09</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">23.04</td>
                  <td className="px-2 py-2 text-center">25.00</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">2.12</td>
                  <td className="px-2 py-2 text-center">2.06</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">9.95</td>
                  <td className="px-2 py-2 text-center">9.65</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100">128.10</td>
                  <td className="px-2 py-2 text-center">124.34</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-2 pl-8">w/ TickTockVQA</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">56.05</td>
                  <td className="px-2 py-2 text-center underline">64.40</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">66.69</td>
                  <td className="px-2 py-2 text-center underline">73.57</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">45.78</td>
                  <td className="px-2 py-2 text-center underline">48.10</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">1.04</td>
                  <td className="px-2 py-2 text-center underline">0.98</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-slate-900">4.82</td>
                  <td className="px-2 py-2 text-center font-bold text-slate-900">4.56</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">62.52</td>
                  <td className="px-2 py-2 text-center underline">59.22</td>
                </tr>
                <tr className="bg-primary-50/30 hover:bg-primary-50/50 transition-colors">
                  <td className="px-4 py-2 pl-8 font-medium">w/ Swap-DPO</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">56.41</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">64.42</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">66.69</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">73.62</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">46.22</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">48.48</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">1.03</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">0.97</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 underline">4.85</td>
                  <td className="px-2 py-2 text-center underline">4.61</td>
                  <td className="px-2 py-2 text-center border-l border-slate-100 font-bold text-primary-700">61.93</td>
                  <td className="px-2 py-2 text-center font-bold text-primary-700">58.79</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Effect of Swap-DPO Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Effect of Swap-DPO
            </h2>
            <div className="h-1 w-20 bg-primary-500 rounded-full mx-auto" />
          </div>

          <div className="prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed text-center mb-10">
            <p>
              <strong>
                Qualitative examples of hand-swap error correction by Swap-DPO.
              </strong>{" "}
              SFT incorrectly swaps the hour and minute hands, whereas Swap-DPO
              successfully corrects this systematic error pattern.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <img
              src="/assets/handswap_qualitative_results.png"
              alt="Effect of Swap-DPO: hand-swap error correction"
              className="w-full h-auto rounded-xl shadow-sm border border-slate-200"
              loading="lazy"
            />
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
