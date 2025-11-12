import React, { useRef } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import {
  FaPhoneAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt,
  FaBirthdayCake, FaFlag, FaUser, FaGlobe
} from "react-icons/fa";
import { PiBicycleDuotone } from "react-icons/pi";
import { TbSwimming } from "react-icons/tb";
import { RiBookLine } from "react-icons/ri";
import { GiShuttlecock } from "react-icons/gi";
import resumeData from "../data/resumeData";
// import profilePic from "../assets/profile.png";

const ResumeOnePage = () => {
  const pageRef = useRef();

  const captureAndSave = async () => {
    const el = pageRef.current;
    if (!el) return;

    // --- FIX OKLCH COLORS ---
    const allElements = el.querySelectorAll("*");
    allElements.forEach((el) => {
      const style = getComputedStyle(el);
      if (style.color.includes("oklch")) {
        el.style.color = "rgb(219, 39, 119)"; // Tailwind pink-600
      }
      if (style.backgroundColor.includes("oklch")) {
        el.style.backgroundColor = "rgb(255, 255, 255)"; // fallback white
      }
      if (style.borderColor.includes("oklch")) {
        el.style.borderColor = "rgb(219, 39, 119)";
      }
    });

    // Small delay to ensure styles applied
    await new Promise(r => setTimeout(r, 120));

    // --- HTML to Canvas ---
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });
    const imgData = canvas.toDataURL("image/png");

    // --- Generate PDF ---
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(`${resumeData.personal.name.replace(/\s+/g, "_")}_CV.pdf`);
  };

  const bulletClass =
    "relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-pink-600";

  return (
    <div className="flex flex-col items-center md:bg-gray-100 min-h-screen py-8 font-poppins">
      <div ref={pageRef} className="w-[270mm] bg-white shadow-sm p-7 relative">

        {/* Internal CSS for PDF page breaks */}
        <style>
          {`
            @media print {
              .page-break { 
                display: block; 
                page-break-before: always; 
              }
            }
          `}
        </style>

        <div className="flex gap-6">
          {/* LEFT COLUMN */}
          <div className="flex-[0.35] flex flex-col items-center gap-4 text-[11px] ml-2">
            {/* <img src={profilePic} alt="profile" className="w-52 h-52 rounded-full object-cover border-2 border-gray-200 mt-8 -ml-2" /> */}

            {/* CONTACT */}
            <div className="w-full">
              <h4 className="font-semibold text-gray-800 mb-2 mt-9.5 text-2xl">CONTACT</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2"><FaPhoneAlt className="text-pink-600" /> {resumeData.personal.phone}</div>
                <div className="flex items-center gap-2"><FaEnvelope className="text-pink-600" /> {resumeData.personal.email}</div>
                <div className="flex items-center gap-2"><FaLinkedin className="text-pink-600" /> {resumeData.personal.linkedin}</div>
                <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-pink-600" /> {resumeData.personal.location}</div>
                <div className="flex items-center gap-2"><FaBirthdayCake className="text-pink-600" /> {resumeData.personal.dob}</div>
                <div className="flex items-center gap-2"><FaFlag className="text-pink-600" /> {resumeData.personal.nationality}</div>
                <div className="flex items-center gap-2"><FaUser className="text-pink-600" /> {resumeData.personal.maritalStatus}</div>
              </div>
            </div>

            {/* PORTFOLIO */}
            <div className="w-full">
              <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-2xl">PORTFOLIO - WEBSITE LINK</h4>
              <div className="flex items-center gap-2">
                <FaGlobe className="text-gray-400" />
                <a href={resumeData.personal.website} target="_blank" rel="noreferrer" className="text-blue-600 text-sm">{resumeData.personal.website}</a>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="w-full">
              <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-2xl">EDUCATION</h4>
              {resumeData.education?.map((edu, i) => (
                <div key={i} className="mb-2">
                  <div className="font-semibold text-[14px] text-gray-800">{edu.degree}</div>
                  <div className="text-sm text-gray-600">{edu.institution}</div>
                  <div className="text-sm text-gray-600">{edu.country}</div>
                  <div className="text-xs text-gray-500">{edu.year}</div>
                </div>
              ))}
            </div>

            {/* CORE SKILLS */}
            <div className="w-full">
              <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-2xl">CORE SKILLS</h4>
              <ul className="pl-4 space-y-1">{resumeData.skills.map((s, i) => (<li key={i} className={bulletClass}>{s}</li>))}</ul>
            </div>

            {/* AWARDS */}
            <div className="w-full">
              <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-2xl">AWARDS & ACHIEVEMENTS</h4>
              <ul className="pl-4 space-y-1">{resumeData.awards.map((a, i) => (<li key={i} className={bulletClass}>{a}</li>))}</ul>
            </div>

            {/* LANGUAGES */}
            <div className="w-full -mt-3 mb-4">
              <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-2xl ">LANGUAGES</h4>
              <div className="space-y-1">
                {resumeData.languages.map((l, i) => {
                  const levels = ["Beginner", "Intermediate", "Fluent"];
                  return (
                    <div key={i} className="flex flex-col">
                      <div className="font-bold text-sm text-gray-900 mb-1">{l.name}</div>
                      <div className="flex gap-6 items-center">
                        {levels.map((level) => (
                          <div key={level} className="flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full border border-gray-800 flex items-center justify-center">
                              {l.level === level && <span className="w-2 h-2 bg-pink-600 rounded-full"></span>}
                            </span>
                            <span className="text-xs text-gray-800">{level}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TOOLS */}
            <div className="w-full mt-2">
              <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-2xl">TOOLS AND SOFTWARE</h4>
              <ul className="pl-4 space-y-1">{resumeData.tools.map((t, i) => (<li key={i} className={bulletClass}>{t}</li>))}</ul>
            </div>

            {/* DEVELOPMENT */}
            <div className="w-full mt-2">
              <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-2xl">PROFESSIONAL DEVELOPMENT</h4>
              <ul className="pl-4 space-y-1">{resumeData.development.map((d, i) => (<li key={i} className={bulletClass}>{d}</li>))}</ul>
            </div>

            {/* CERTIFICATES */}
            <div className="w-full mt-2">
              <h4 className="font-semibold text-gray-800 mb-2 mt-4 text-2xl">CERTIFICATES</h4>
              {resumeData.certificates.map((c, i) => (
                <div key={i} className="mb-2 text-xs">
                  <div className="font-semibold">{c.title} — {c.org} ({c.year})</div>
                  <div><a href={c.link} target="_blank" rel="noreferrer" className="text-blue-600 text-sm">{c.link}</a></div>
                  <div className="text-gray-400">{c.code}</div>
                </div>
              ))}
            </div>

            {/* HOBBIES */}
            <div className="w-full mt-2">
              <h4 className="font-semibold text-gray-800 mb-2 mt-2 text-2xl">HOBBIES</h4>
              {(() => {
                const hobbyIcons = [<RiBookLine size={15} />, <TbSwimming size={15} />, <PiBicycleDuotone size={15} />, <GiShuttlecock size={15} />];
                return (
                  <ul className="space-y-2">
                    {resumeData.hobbies.map((hobby, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="text-pink-600">{hobbyIcons[i] || <GiShuttlecock />}</span>
                        <span>{hobby}</span>
                      </li>
                    ))}
                  </ul>
                );
              })()}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-[0.65] flex flex-col gap-3 text-[10.4px] -ml-2">
            <div>
              <div className="text-7xl font-bold text-gray-800">{resumeData.personal.name.toUpperCase()}</div>
              <div className="text-2xl font-semibold text-gray-800 mt-1 italic">{resumeData.personal.title}</div>
            </div>
            <div className="space-y-1 text-[11px]">{resumeData.summary}</div>

            {/* PROFESSIONAL EXPERIENCE*/}
            <div className="relative -mt-2">
              <h4 className="font-semibold text-gray-800 mb-2 text-2xl">PROFESSIONAL EXPERIENCE</h4>
              <div className="absolute left-[7px] top-13  bottom-4 w-0.5  bg-pink-600"></div>

              {resumeData.experience.map((exp, i) => (
                <div key={i} className="relative flex items-start mb-6 -mt-0.5">
                  <span className="absolute left-0 mt-1 w-4 h-4 border-2 border-pink-600 rounded-full bg-white"></span>
                  <div className="ml-8">
                    <div className="font-bold text-[14px] tracking-wider text-gray-800">{exp.role}</div>
                    <div className="text-xs text-gray-600 font-semibold">{exp.org} • {exp.date}</div>
                    <ul className="pl-4 space-y-1 mt-1">{exp.bullets.map((b, ii) => (<li key={ii} className={bulletClass}>{b}</li>))}</ul>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGE BREAK for PDF */}
            <div className="page-break"></div>

            {/* INTERNSHIPS */}
            <div className="relative -mt-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-2xl">PROFESSIONAL EXPERIENCE</h4>
              <div className="absolute left-[7px] top-11 bottom-0 w-0.5 bg-pink-600"></div>

              {resumeData.internships.map((it, i) => (
                <div key={`intern-${i}`} className="relative flex items-start mb-6">
                  <span className="absolute left-0 mt-1 w-4 h-4 border-2 border-pink-600 rounded-full bg-white"></span>
                  <div className="ml-8">
                    <div className="font-bold text-[14px] tracking-wider text-gray-800">{it.role}</div>
                    <div className="text-xs text-gray-500">{it.org} • {it.date}</div>
                    <ul className="pl-4 space-y-1 mt-1">{it.bullets.map((b, ii) => (<li key={ii} className={bulletClass}>{b}</li>))}</ul>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* DOWNLOAD BUTTON */}
      <div className="flex gap-4 mt-6">
        <button onClick={captureAndSave} className="bg-pink-600 hover:bg-pink-500 text-white px-5 py-2 rounded">Download PDF</button>
      </div>
    </div>
  );
};

export default ResumeOnePage;