const Tab = ({ label, onClick, valueTab }) => {
  return (
    <button
      className={`h-10 px-4 rounded-sm border border-border text-lg font-bold leading-none cursor-pointer transition-colors duration-300 ease-in-out hover:text-text-3 hover:bg-bg-2 ${valueTab ? "bg-bg-2 text-text-3" : "text-text-2 bg-transparent"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
