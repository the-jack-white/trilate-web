type ButtonType = {
  title: string;
  callback?: () => void;
};

const Button = ({ title, callback }: ButtonType) => {
  return (
    <button
      onClick={callback}
      className="border px-2 border-slate-600 uppercase rounded hover:bg-slate-600 hover:text-slate-200 dark:border-slate-200 dark:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-600"
    >
      {title}
    </button>
  );
};

export default Button;
