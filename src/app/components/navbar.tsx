import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { ArrowUpRight, ChartBar } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between p-6 shadow-lg shadow-[#0e12615c]">
      <div className="flex items-center gap-1">
        <h1 className="text-xl font-bold text-zinc-200">
          Ivolbene{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Dev
          </span>
        </h1>
      </div>
      <div className="flex gap-5">
        <Link
          href="https://www.linkedin.com/in/ivolbene-hassib-5560b4321"
          target="_blank"
          className="group flex items-center"
        >
          <Image src="/linkedin.svg" alt="Linkedin" width={36} height={36} />
          <span className="inline-block w-0 overflow-hidden text-zinc-50 transition-all duration-300 ease-in-out group-hover:w-[22px]">
            <ArrowUpRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-100" />
          </span>
        </Link>
        <Link
          href="https://www.github.com/IvolbeneH"
          target="_blank"
          className="group flex items-center"
        >
          <Image src="/github.svg" alt="GitHub" width={36} height={36} />
          <span className="inline-block w-0 overflow-hidden text-zinc-50 transition-all duration-300 ease-in-out group-hover:w-[22px]">
            <ArrowUpRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-100" />
          </span>
        </Link>
        <HoverCard>
          <HoverCardTrigger className="group flex cursor-pointer items-center">
            <Image src="/discord.svg" alt="Discord" width={36} height={36} />
            <span className="inline-block w-0 overflow-hidden text-zinc-50 transition-all duration-300 ease-in-out group-hover:w-[22px]">
              <ArrowUpRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-100" />
            </span>
          </HoverCardTrigger>
          <HoverCardContent className="mr-2 flex w-80 gap-4 bg-zinc-950">
            <Image
              src="/discord.svg"
              width={50}
              height={50}
              alt="Discord Logo"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-base text-zinc-100">
                Discord:{" "}
                <span className="text-sm text-zinc-300">cokki#1544</span>
              </h1>
              <h2 className="flex items-center gap-2 text-xs text-zinc-200">
                Chama discord para negociações.
                <ChartBar className="h-3 w-3" />
              </h2>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </nav>
  );
}
