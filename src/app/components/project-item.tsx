"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { SkillData } from "../constants";
import Link from "next/link";
import { ArrowUpRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { slideInFromTop } from "../lib/motion";

interface ProjectItemProps {
  src: string;
  title: string;
  title2: string;
  description: string;
}

export function ProjectItem({
  src,
  title,
  description,
  title2,
}: ProjectItemProps) {
  return (
    <motion.div initial="hidden" animate="visible">
      <motion.div variants={slideInFromTop}>
        <Card className="bg-transparent text-zinc-200">
          <CardContent className="flex max-w-96 flex-col gap-3 p-2 backdrop-blur-sm">
            <div>
              <Image
                src={src}
                alt="Projetos"
                width={480}
                height={40}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-bold lg:text-xl">
                  {title} <span className="text-red-600">{title2}</span>
                </h1>
                <div className="flex items-center gap-2">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Badge>Tecnologias</Badge>
                    </HoverCardTrigger>
                    <HoverCardContent className="flex gap-3 overflow-x-auto rounded-2xl border-none bg-[#020b1f] text-zinc-50 [&::-webkit-scrollbar]:hidden">
                      {SkillData.map((skill, index) => (
                        <div
                          key={index}
                          className="flex h-6 items-center justify-center gap-1 rounded-full border-[0.1px] px-4"
                        >
                          <Image
                            src={skill.Image}
                            width={12}
                            height={12}
                            alt={skill.name}
                          />
                          <span className="text-[0.6rem] font-semibold uppercase">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </HoverCardContent>
                  </HoverCard>
                  <Link
                    href="https://www.github.com/IvolbeneH"
                    target="_blank"
                    className="group flex items-center"
                  >
                    <Image
                      src="/github.svg"
                      alt="GitHub"
                      width={36}
                      height={36}
                    />
                    <span className="inline-block w-0 overflow-hidden text-zinc-50 transition-all duration-300 ease-in-out group-hover:w-[22px]">
                      <ArrowUpRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-100" />
                    </span>
                  </Link>
                  <Link
                    href="https://www.github.com/IvolbeneH"
                    target="_blank"
                    className="group flex items-center fill-current text-zinc-50"
                  >
                    <Send className="h-6 w-6" />
                    <span className="inline-block w-0 overflow-hidden text-zinc-50 transition-all duration-300 ease-in-out group-hover:w-[22px]">
                      <ArrowUpRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-100" />
                    </span>
                  </Link>
                </div>
              </div>

              <p className="text-xs lg:text-sm">{description}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
