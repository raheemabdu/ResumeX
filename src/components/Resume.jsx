import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const Resume = () => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current.cloneNode(true);

    // ✅ remove Tailwind colors (oklch) before PDF generation
    element.querySelectorAll("*").forEach((el) => {
      el.style.color = "black";
      el.style.background = "white";
      el.style.borderColor = "gray";
    });

    const opt = {
      margin: 0.3,
      filename: "Abdul-Raheem-Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* 🔘 Simple Button (No Tailwind) */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={handleDownload}>Download Resume</button>
      </div>

      {/* 🧾 Resume Content */}
      <div
        ref={resumeRef}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden p-10"
      >
        <div className="text-center border-b border-gray-300 pb-4">
          <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
            ABDUL RAHEEM SHEIKH
          </h1>
          <h2 className="text-lg text-pink-600 font-semibold mt-2">
            Business Operations & HR Professional
          </h2>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed max-w-2xl mx-auto">
            Strategic and results-oriented Business Operations & HR Leader with
            10+ years of experience in Operations, HR, and Strategy.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-6">
          {/* Left Column */}
          <div className="space-y-6 border-r border-gray-200 pr-6">
            <div>
              <h3 className="text-lg font-semibold text-pink-600 mb-2">
                CONTACT
              </h3>
              <p className="text-sm">📞 +92 300 1234567</p>
              <p className="text-sm">✉️ abdulraheem@gmail.com</p>
              <p className="text-sm">🌍 Karachi, Pakistan</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-600 mb-2">
                PORTFOLIO
              </h3>
              <a
                href="https://www.jobsterx.com"
                className="text-blue-600 text-sm underline"
              >
                https://www.jobsterx.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-600 mb-2">
                EDUCATION
              </h3>
              <p className="text-sm font-medium">Bachelor of Commerce</p>
              <p className="text-xs text-gray-600">
                National College, Karachi — 2017
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-600 mb-2">
                CORE SKILLS
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Business & Operational Strategy</li>
                <li>Cross-Functional Leadership</li>
                <li>Performance Management</li>
                <li>Policy Design & Compliance</li>
                <li>HR Transformation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pink-600 mb-2">
                LANGUAGES
              </h3>
              <p className="text-sm">English — Fluent</p>
              <p className="text-sm">Urdu — Fluent</p>
              <p className="text-sm">Arabic — Beginner</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-pink-600 border-b border-gray-300 pb-1">
              PROFESSIONAL EXPERIENCE
            </h3>

            <div>
              <h4 className="font-semibold text-gray-800">
                HR Consultant — Siyah Real Estate (Dubai)
              </h4>
              <p className="text-xs text-gray-500">Jan 2023 – Present</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-700 space-y-1">
                <li>
                  Directed HR operations including recruitment and policy
                  development.
                </li>
                <li>
                  Conducted training programs and improved retention strategies.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">
                HR Manager — Forum Pvt Ltd (Pakistan)
              </h4>
              <p className="text-xs text-gray-500">Feb 2019 – Apr 2021</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-700 space-y-1">
                <li>Managed HR for 300+ employees across logistics hubs.</li>
                <li>Improved employee satisfaction by 35%.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">
                HR Business Partner — Liberty Books
              </h4>
              <p className="text-xs text-gray-500">Nov 2017 – Feb 2019</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-700 space-y-1">
                <li>
                  Designed HR strategies, dashboards, and policy implementation.
                </li>
                <li>
                  Increased employee retention and improved customer engagement.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">
                HR Coordinator — HUB Pakistan
              </h4>
              <p className="text-xs text-gray-500">Jan 2017 – Oct 2017</p>
              <ul className="list-disc list-inside text-sm mt-2 text-gray-700 space-y-1">
                <li>
                  Handled HR documentation, recruitment, and process automation.
                </li>
                <li>Supported 230+ employees with onboarding and payroll.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;