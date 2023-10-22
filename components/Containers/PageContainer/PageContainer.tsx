"use client";

import { Container, Header } from "@/components";
import Package from "../../../package.json";
import { ReactNode, useState } from "react";

type PageContainerTypes = {
  children: ReactNode;
  fullscreen?: boolean;
};

const PageContainer = ({ children, fullscreen }: PageContainerTypes) => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <Container fullscreen={fullscreen} menuToggle={menuToggle}>
      <Header menuToggle={menuToggle} menuToggleHandler={setMenuToggle} />
      {children}
      <div className="flex justify-center">
        <a className="dark:text-slate-200">v{Package.version}</a>
      </div>
    </Container>
  );
};

export default PageContainer;
