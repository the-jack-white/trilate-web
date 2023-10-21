import { Container, Header } from "@/components";
import Package from "../../../package.json";
import { ReactNode } from "react";

type PageContainerTypes = {
  children: ReactNode;
  fullscreen?: boolean;
};

const PageContainer = ({ children, fullscreen }: PageContainerTypes) => {
  return (
    <Container fullscreen={fullscreen}>
      <Header />
      {children}
      <div className="flex justify-center">
        <a className="dark:text-slate-200">v{Package.version}</a>
      </div>
    </Container>
  );
};

export default PageContainer;
