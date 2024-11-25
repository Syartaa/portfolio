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
            I have recently completed my studies in Computer Science and Engineering from UBT (University of Business and Technology), where I developed a strong foundation in various areas of technology. Throughout my academic journey, I gained expertise in core programming languages such as Java and JavaScript, and honed my skills in web development technologies like HTML, CSS, and React. My studies also deepened my understanding of Object-Oriented Programming (OOP), data structures, and algorithms, which I applied to real-world projects.         </p>
        
            <p className="mb-3">
            Throughout my academic journey, I have developed a strong foundation in programming and software development. I have worked with core programming languages such as Java and JavaScript, as well as web development technologies like HTML, CSS, and React. My studies have deepened my understanding of Object-Oriented Programming (OOP), data structures, and algorithms, all of which I apply to real-world projects.            </p>
        
            <p>
            In addition to my academic and professional experience, I am passionate about exploring the latest technologies in mobile app development. As part of my internship, I am learning to use Flutter to build scalable, performant applications, which has strengthened my interest in mobile development.

Outside of tech, I enjoy  listening to music, reading, and engaging in thoughtful conversations with friends. 

            </p>
        </motion.section>
    );
}
export default About;