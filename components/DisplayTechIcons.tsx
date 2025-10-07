"use client";

import React, { useEffect, useState } from "react";
import { getTechLogos } from "@/lib/utils";
import Image from "next/image";
import { cn } from "@/lib/utils";
// Define prop types
interface TechIconProps {
  techStack: string[];
}

interface TechLogo {
  tech: string;
  url: string;
}

const DisplayTechIcons: React.FC<TechIconProps> = ({ techStack }) => {
  const [techIcons, setTechIcons] = useState<TechLogo[]>([]);

  useEffect(() => {
    const fetchIcons = async () => {
      const icons = await getTechLogos(techStack);
      setTechIcons(icons || []);
    };
    fetchIcons();
  }, [techStack]);

  return (
    <div className="flex flex-row gap-2">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn("relative group bg-dark-300 rounded-full p-2 flex items-center justify-center",index>=1 && '-ml-3')}
        >
          <Image
            src={url}
            alt={tech}
            width={24}
            height={24}
            className="size-5 object-contain"
          />
          <span className="tech-tooltip absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
            {tech}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
