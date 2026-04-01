import { categories } from "../../../data/products";
import Search from "./Search";
import Sort from "./Sort";
import Tab from "./Tab";

const Filtered = ({
  valueSearch,
  onChangeSearch,
  valueTab,
  onChangeTab,
  valueSort,
  onChangeSort,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <Search value={valueSearch} onChange={onChangeSearch} />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        <ul className="flex items-center flex-wrap gap-4">
          <li>
            <Tab
              label="All"
              valueTab={valueTab === "All"}
              onClick={() => onChangeTab("All")}
            />
          </li>
          {categories.map((item) => (
            <li key={item.id}>
              <Tab
                label={item.name}
                valueTab={valueTab === item.slug}
                onClick={() => onChangeTab(item.slug)}
              />
            </li>
          ))}
        </ul>

        <Sort value={valueSort} onChange={onChangeSort} />
      </div>
    </div>
  );
};

export default Filtered;
