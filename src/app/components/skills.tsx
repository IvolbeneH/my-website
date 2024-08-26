"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { SkillData } from "../constants";

export function Skills() {
  return (
    <div
      data-aos="zoom-in-up"
      className="flex h-screen w-screen items-center justify-center"
      id="skills"
    >
      <div className="flex max-w-[80%] flex-col items-center gap-20 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-[50px] font-semibold text-white">
            Skills{" "}
            <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              &{" "}
            </span>
            Tecnologias
          </h1>
          <p className="text-[20px] text-gray-400">
            Usando as tecnologias mais recentes para interfaces.
          </p>
        </div>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[90%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
