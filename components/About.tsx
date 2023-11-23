"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionTitle from "./SectionTitle";

const About = () => {
    const { ref } = useSectionInView("About");

    return (
        <motion.section id="about" className="text-center leading-8 max-w-[40rem] mb-28 sm:mb-40 scroll-mt-28"
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .175 }}
        >
            <SectionTitle>About me</SectionTitle>
            <p className="mb-3">
                During my last year of high school, I started to take an IT Associate course, where I learned to program. Firstly, I learned programming logic using Python, after that, I studied the core web elements: HTML, CSS and JavaScript. In addition, during the course I also learned SQL, Object Oriented Programming and MVC structure.
            </p>
        
            <p className="mb-3">
                After that, in 2023, I started my bachelor in Computer Science and I am currently in the second semester. During this time I learned more about programming notions, concepts and OOB using Java. Furthermore, I'm also studying React (Next.JS) and TypeScript to integrate myself with the technologies used in the market.
            </p>
        
            <p>
                Lastly, when I'm not coding or studying, I like to play video games, chat with my friends, listen to music and read. I like to read mainly about philosophy and astronomy.
            </p>
        </motion.section>
    );
}
export default About;