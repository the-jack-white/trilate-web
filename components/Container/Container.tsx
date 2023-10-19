const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-slate-600 w-full h-screen p-1 sm:p-4">
      <div className=" bg-slate-200 w-full h-full rounded-lg p-4 dark:bg-slate-600">
        {children}
      </div>
    </main>
  );
};

export default Container;