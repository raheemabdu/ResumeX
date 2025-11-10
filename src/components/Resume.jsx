import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const Resume = () => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    if (!element) return;

    // Fix OKLCH colors
    const allElements = element.querySelectorAll("*");
    allElements.forEach((el) => {
      const style = window.getComputedStyle(el);
      const color = style.color;
      const bg = style.backgroundColor;
      const border = style.borderColor;
      if (color.includes("oklch")) el.style.color = "#000000";
      if (bg.includes("oklch")) el.style.backgroundColor = "#ffffff";
      if (border.includes("oklch")) el.style.borderColor = "#cccccc";
    });

    const opt = {
      margin: 0.2,
      filename: "Abdul-Raheem-Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
      {/* ============ Resume ============ */}
      <div
        ref={resumeRef}
        className="bg-white shadow-lg rounded-2xl w-full max-w-5xl p-10 leading-relaxed"
      >
        {/* ===== Page 1 ===== */}
        <div className="break-inside-avoid">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-1">
              Abdul Raheem
            </h1>
            <p className="text-lg text-gray-600">
              Frontend Developer | React + Tailwind CSS
            </p>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="col-span-1 space-y-6 border-r pr-6 break-inside-avoid">
              <div>
                <h2 className="text-xl font-semibold text-blue-700 mb-2 border-b pb-1">
                  Profile Summary
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Passionate frontend developer skilled in creating responsive
                  and elegant user interfaces using React, Vite, and Tailwind CSS.
                  Dedicated to performance optimization and clean UI design.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-blue-700 mb-2 border-b pb-1">
                  Skills
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>React.js, Vite, Tailwind CSS</li>
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>Responsive Design</li>
                  <li>Git / GitHub</li>
                  <li>Basic Node.js & Express</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-blue-700 mb-2 border-b pb-1">
                  Education
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Bachelor in Computer Science (BSCS) — University of Example,
                  2022
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-blue-700 mb-2 border-b pb-1">
                  Achievements
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Completed 50+ freelance projects</li>
                  <li>5-star client feedback on Upwork</li>
                  <li>Contributed to Tailwind UI kits</li>
                  <li>Designed 10+ mobile-first web apps</li>
                  <li>Published React components on GitHub</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-blue-700 mb-2 border-b pb-1">
                  References
                </h2>
                <p className="text-gray-700 text-sm">Available upon request.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-2 pl-6 space-y-10 break-inside-avoid">
              <div>
                <h2 className="text-2xl font-semibold text-blue-700 mb-2 border-b pb-1">
                  Experience
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Frontend Developer — Freelance (2023 - Present)
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Developed and deployed web apps using React + Vite.</li>
                      <li>Created reusable UI components with Tailwind CSS.</li>
                      <li>
                        Integrated html2pdf.js for resume export features.
                      </li>
                    </ul>
                     <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Developed and deployed web apps using React + Vite.</li>
                      <li>Created reusable UI components with Tailwind CSS.</li>
                      <li>
                        Integrated html2pdf.js for resume export features.
                      </li>
                    </ul> <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Developed and deployed web apps using React + Vite.</li>
                      <li>Created reusable UI components with Tailwind CSS.</li>
                      <li>
                        Integrated html2pdf.js for resume export features.
                      </li>
                    </ul>
                  </div>
                     <div className="mb-6 break-inside-avoid">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2 border-b pb-1">
              Projects
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
              <li>
                <strong>Resume Builder:</strong> Built using React & Tailwind, allows users to generate downloadable PDF resumes.
              </li>
              <li>
                <strong>Portfolio Website:</strong> Responsive React portfolio with modern animations and smooth UI.
              </li>
              <li>
                <strong>Todo App:</strong> CRUD-based app with React Hooks and local storage integration.
              </li>
              <li>
                <strong>Weather App:</strong> Real-time weather updates using OpenWeather API with Tailwind design.
              </li>
              <li>
                <strong>Expense Tracker:</strong> Budget management app with chart visualization using Recharts.
              </li>
            </ul>
          </div>
                  

                  
                  

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      UI Developer — Remote Projects (2022 - 2023)
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>
                        Collaborated with teams to deliver responsive designs.
                      </li>
                      <li>
                        Optimized website loading time and UI performance.
                      </li>
                      <li>Maintained version control using Git and GitHub.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Page 2 ===== */}
        <div className="break-after-page">
          {/* Projects */}
          <div className="mb-6 break-inside-avoid">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2 border-b pb-1">
              Projects
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
              <li>
                <strong>Resume Builder:</strong> Built using React & Tailwind, allows users to generate downloadable PDF resumes.
              </li>
              <li>
                <strong>Portfolio Website:</strong> Responsive React portfolio with modern animations and smooth UI.
              </li>
              <li>
                <strong>Todo App:</strong> CRUD-based app with React Hooks and local storage integration.
              </li>
              <li>
                <strong>Weather App:</strong> Real-time weather updates using OpenWeather API with Tailwind design.
              </li>
              <li>
                <strong>Expense Tracker:</strong> Budget management app with chart visualization using Recharts.
              </li>
            </ul>
          </div>

          {/* Additional Experience */}
          <div className="mb-6 break-inside-avoid">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2 border-b pb-1">
              Additional Experience
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Contributed to open-source React component libraries.</li>
              <li>Wrote documentation for Tailwind-based UI templates.</li>
              <li>Worked with small startups to create landing pages.</li>
              <li>Developed internal dashboards for task tracking.</li>
              <li>Experimented with animations and transitions using Framer Motion.</li>
            </ul>
          </div>

          {/* Personal Statement */}
         
        </div>
      </div>

      {/* ===== Button ===== */}
      <button
        onClick={handleDownload}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Resume;