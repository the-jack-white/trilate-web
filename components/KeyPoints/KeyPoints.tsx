type KeyPointsTypes = {
  heading: string;
  body: string;
};

const KeyPoints = ({ heading, body }: KeyPointsTypes) => {
  return (
    <div className="my-4 p-4 border border-slate-600 rounded-lg dark:border-slate-200">
      <h3 className="text-base md:text-lg uppercase dark:text-slate-200">
        {heading}
      </h3>
      <p className="text-sm md:text-base dark:text-slate-200">{body}</p>
    </div>
  );
};

export default KeyPoints;
