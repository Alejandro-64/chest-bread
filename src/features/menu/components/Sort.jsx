import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Sort = ({ value, onChange }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      <select
        id="sort"
        className="w-full h-10 pl-4 pr-10 rounded-sm border border-border text-lg font-bold leading-none text-text-2 bg-transparent appearance-none outline-none focus:border-bg-2"
        value={value}
        onChange={onChange}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <option value="">Default</option>
        <option value="more">More Price</option>
        <option value="lower">Lower Price</option>
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-2">
        {isActive ? <BsChevronUp size={18} /> : <BsChevronDown size={18} />}
      </div>
    </div>
  );
};

export default Sort;
