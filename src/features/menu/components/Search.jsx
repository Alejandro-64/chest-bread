const Search = ({ value, onChange }) => {
  return (
    <input
      id="search"
      type="search"
      placeholder="Search Product...."
      value={value}
      onChange={onChange}
      className="w-full h-10 px-2 rounded-sm border border-border text-text-2"
    />
  );
};

export default Search;
