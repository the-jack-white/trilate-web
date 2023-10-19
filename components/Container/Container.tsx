const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-slate-600 w-full h-full sm:h-screen p-1 md:p-4 dark:bg-slate-200">
      <div className=" bg-slate-200 w-full h-full rounded-lg p-4 dark:bg-slate-600">
        {children}
      </div>
    </main>
  );
};

export default Container;
