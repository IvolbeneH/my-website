"use client";
import { useEffect } from "react";
import { MidSection } from "./components/midsection";
import { Navbar } from "./components/navbar";
import { ProjectItem } from "./components/project-item";
import { Skills } from "./components/skills";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }, []);
  return (
    <main className="h-full w-full flex-col">
      <Navbar />
      <MidSection />
      <Skills />
      <div
        data-aos="zoom-in"
        className="flex w-full flex-col items-center justify-center gap-3"
      >
        <h1 className="flex flex-wrap items-center justify-center gap-4 text-[50px] font-semibold text-white">
          Projetos{" "}
          <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
            {" "}
            &{" "}
          </span>
          Tecnologias
        </h1>
        <div
          data-aos="fade-right"
          className="mt-12 flex w-full flex-col items-start gap-6 px-12 lg:px-[5.4rem]"
          id="projects"
        >
          <h1 className="text-lg font-bold text-zinc-200 lg:text-3xl">
            Back-end integrado.
          </h1>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <ProjectItem
              src="/bannerfood.png"
              description="Projeto feito com ferramentes atuais como Next.Js, Tailwind,
                TypeScript, NextAuth, Prisma e PostgreSQL, esse projeto tem
                varios restaurantes e comidas no banco de dados com sistema de
                carrinho e favoritos, e além disso login com google e facebook."
              title="Food"
              title2="Delivery"
            />
            <ProjectItem
              src="/barberbanner.png"
              title="FSW"
              title2="Barber"
              description="Projeto feito com as ferramentas Next.js, Tailwind, Prisma, NextAuth,
               PostgreSQL e NeonDB, projeto esse que visa uma reserva na barbearia que você deseja 
               com o tipo de serviço que você quer, em uma determinada barbearia."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
