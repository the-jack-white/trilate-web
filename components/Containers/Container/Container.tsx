import Link from "next/link";
import Package from "../../../package.json";

type ContainerType = {
  children: React.ReactNode;
  fullscreen?: boolean;
  menuToggle: boolean;
};

const Container = ({ children, fullscreen, menuToggle }: ContainerType) => {
  return (
    <main>
      <div
        className={
          !menuToggle
            ? "left-[-224px] flex w-[224px] h-full p-5 pt-28 absolute flex-col bg-slate-200 border border-slate-600 dark:bg-slate-600 dark:border-slate-200"
            : "left-[0px] flex animate-openmenu w-[224px] h-full p-5 pt-28 absolute flex-col bg-slate-200 border border-slate-600 dark:bg-slate-600 dark:border-slate-200"
        }
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col gap-4 uppercase dark:text-slate-200">
            <Link href="/services">Services</Link>
            <Link href="pricing">Pricing</Link>
            <Link href="#">About</Link>
            <Link href="#">Book a session</Link>
          </div>
          <div className="flex justify-center">
            <a className="dark:text-slate-200">v{Package.version}</a>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full ${!fullscreen && "sm:h-screen"} p-1 md:p-4`}
      >
        <div
          className={`bg-slate-200 w-full h-full rounded-lg p-4 dark:bg-slate-600 ${
            menuToggle && "bg-slate-400 dark:bg-slate-400"
          }`}
        >
          {children}
        </div>
      </div>
    </main>
  );
};

export default Container;
