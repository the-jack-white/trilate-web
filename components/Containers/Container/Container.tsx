type ContainerType = {
  children: React.ReactNode;
  fullscreen?: boolean;
};

const Container = ({ children, fullscreen }: ContainerType) => {
  return (
    <main
      className={`w-full h-full ${!fullscreen && "sm:h-screen"} p-1 md:p-4`}
    >
      <div className=" bg-slate-200 w-full h-full rounded-lg p-4 dark:bg-slate-600">
        {children}
      </div>
    </main>
  );
};

export default Container;
