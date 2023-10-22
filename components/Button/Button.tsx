type ButtonType = {
  title: string;
  type?: "button" | "submit" | "reset";
  disabled: boolean;
  callback?: () => void;
};

const Button = ({ title, callback, type, disabled }: ButtonType) => {
  return (
    <button
      disabled={disabled}
      onClick={callback}
      type={type}
      className={`border px-2 uppercase rounded ${
        !disabled
          ? "border-slate-600 hover:bg-slate-600 hover:text-slate-200 dark:border-slate-200 dark:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-600"
          : "text-slate-300 dark:text-slate-400"
      } `}
    >
      {title}
    </button>
  );
};

export default Button;
