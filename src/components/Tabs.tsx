import "./components.css";
import type { CategoryName } from "./ImgGrid";

type TabProps = {
  activeTab: CategoryName;
  setActiveTab: (activeTab: CategoryName) => void;
};

const Tabs = ({ activeTab, setActiveTab }: TabProps) => {
  const categories: CategoryName[] = ["nature", "travel", "sport"];
  return (
    <div className="links">
      {categories.map((category, key) => (
        <div
          key={key}
          onClick={() => setActiveTab(category)}
          className={activeTab === category ? `${category} active` : category}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
