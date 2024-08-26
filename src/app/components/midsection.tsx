"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "../lib/motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, MousePointerClick } from "lucide-react";

export function MidSection() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative mt-20 flex h-full w-full flex-col items-center gap-12 lg:flex-row lg:justify-around lg:gap-0"
    >
      <motion.div
        className="flex w-[22rem] flex-col gap-4 lg:w-[36rem] lg:gap-6"
        variants={slideInFromLeft(0.8)}
      >
        <div className="absolute"></div>
        <div className="absolute"></div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Badge className="flex w-fit items-center justify-center gap-2 text-zinc-300">
            <MousePointerClick className="h-4 w-4 text-purple-500" />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Front-end Developer
            </span>
          </Badge>
          <Badge className="flex w-fit items-center justify-center gap-2 text-zinc-300">
            <MousePointerClick className="h-4 w-4 text-blue-500" />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Junior Back-end Developer
            </span>
          </Badge>
        </div>
        <h1 className="text-2xl font-bold text-zinc-200 lg:text-4xl">
          Conheça e desfrute de projetos.
        </h1>
        <span className="text-base font-medium text-zinc-300 lg:text-2xl">
          Sou um desenvolvedor front-end e freelancer, trabalhando atualmente
          com as{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-extrabold text-transparent">
            melhores ferramentas do mercado
          </span>{" "}
          para desenvolvimento de interfaces modernas.
        </span>
        <div className="flex gap-4">
          <a href="#skills">
            <Button className="group relative flex items-center transition-all duration-300 ease-in-out">
              Skills
              <span className="inline-block w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[22px]">
                <ArrowRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-100" />
              </span>
            </Button>
          </a>
          <a href="#projects">
            <Button className="group relative flex items-center transition-all duration-300 ease-in-out">
              Projects
              <span className="inline-block w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[22px]">
                <ArrowRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-100" />
              </span>
            </Button>
          </a>
          <Button className="group relative flex items-center transition-all duration-300 ease-in-out">
            About
            <span className="inline-block w-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[22px]">
              <ArrowRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-100" />
            </span>
          </Button>
        </div>
      </motion.div>
      <motion.div variants={slideInFromTop}>
        <Image
          src="/mainIconsdark.svg"
          width={500}
          height={1}
          alt="Experiences"
        />
      </motion.div>
    </motion.div>
  );
}
