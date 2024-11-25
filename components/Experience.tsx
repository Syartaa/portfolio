"use client";

import { motion } from "framer-motion";
import { PiSmiley } from "react-icons/pi";

import { useMediaQuery, useSectionInView } from "@/lib/hooks";

import SectionTitle from "./SectionTitle";

const experiences = [
  {
    role: "Flutter Developer Intern",
    company: "PROGTELX · Prishtine",
    date: "09/24 - Present",
    description: [
      "Involved in designing and developing mobile applications using Flutter.",
      "Implemented UI/UX designs and integrated APIs to create interactive and efficient applications.",
    ],
  },
  {
    role: "Data Curator",
    company: "VEEVA SYSTEMS · Remote",
    date: "03/24 - 09/24",
    description: [
      "Responsible for researching and curating specific information from the internet.",
      "Adhered to strict guidelines during data collection.",
    ],
  },
  {
    role: "Trainer/Lecturer",
    company: "PEN · Gjilan",
    date: "12/21 - 06/22",
    description: [
      "Conducted a project to help the youth of Gjilan on the prevention of stress and anxiety.",
    ],
  },
];

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <motion.section
      id="experience"
      className="mb-28 scroll-mt-28 sm:mb-40"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionTitle>My Experience</SectionTitle>

      {/* <div className="flex items-center justify-center text-lg gap-y-2 py-6 px-6 border rounded-lg border-black/5 bg-gray-100 transition sm:px-12 dark:text-white dark:bg-white/10">
        <span className="w-full mr-1">
          Currently looking for my first job as a developer.
        </span>
        <PiSmiley size={isMobile ? 40 : 32} />
      </div> */}

      <div className="mt-8 space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg bg-white shadow-md dark:bg-gray-800 dark:text-white"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {exp.company} · {exp.date}
            </p>
            <ul className="mt-3 list-disc list-inside space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-gray-800 dark:text-gray-300">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
