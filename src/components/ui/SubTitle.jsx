const SubTitle = ({ text }) => {
  return (
    <div className="w-full py-1 border-b-2 border-border">
      <h2 className="text-4xl font-black uppercase leading-none text-text-2">
        {text}
      </h2>
    </div>
  );
};

export default SubTitle;
