import React, { ReactNode } from "react";

type HeroContainerType = {
  children?: ReactNode;
  path: string;
  description: string;
};

const HeroContainer = ({ children, path, description }: HeroContainerType) => {
  return (
    <div className="mt-4 pt-4 md:p-4">
      <h1 className="text-2xl uppercase dark:text-slate-200">{path}</h1>
      <div>
        <p className="p-4 text-sm md:text-base dark:text-slate-200">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};

export default HeroContainer;
