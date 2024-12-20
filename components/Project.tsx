"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl, url }: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <Link className="block group mb-3 sm:mb-8 last:mb-0" href={url} target="_blank">
            <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }}>
                <section className="relative flex flex-col sm:flex-row sm:items-center min-h-full max-w-[42rem] overflow-hidden border rounded-lg border-black/5 bg-gray-100 transition sm:h-[20rem] sm:pr-8 hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                    {/* Content Section */}
                    <div className="flex flex-col justify-center h-full pt-4 pb-7 px-2 sm:pl-10 sm:pr-0 sm:pt-10 sm:max-w-[50%]">
                        <h3 className="text-2xl w-full font-semibold">{title}</h3>

                        <p className="text-sm text-gray-700 leading-relaxed mt-2 dark:text-white/70">
                            {description}
                        </p>

                        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                            {tags.map((tag, index) => (
                                <li
                                    className="text-[0.7rem] text-white tracking-wider uppercase py-1 px-3 rounded-full bg-black/[0.7] dark:text-white/70"
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Section */}
                    <motion.div
                        className="relative w-full sm:w-[45%] mt-4 sm:mt-0 sm:ml-8"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect ratio 16:9 */}
                            <Image
                                src={imageUrl}
                                alt={`Project ${title}`}
                                className="absolute top-0 left-0 object-cover rounded-lg shadow-2xl transition-transform group-hover:scale-105 group-hover:rotate-3"
                                layout="fill" // Fills the container defined by the aspect ratio
                            />
                        </div>
                    </motion.div>
                </section>
            </motion.div>
        </Link>
    );
};

export default Project;
