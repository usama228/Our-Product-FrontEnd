const categories = [
  { id: 1, name: "Designer", total: "1,945" },
  { id: 2, name: "Web Developers", total: "8,136" },
  { id: 3, name: "Illustrators", total: "917" },
  { id: 4, name: "Node.js", total: "240" },
  { id: 5, name: "Project Managers", total: "2,460" },
];

export default function Category1() {
  return (
    <>
      <div className="sidebar-widget mb30">
        <h4 className="widget-title">Category</h4>
        <div className="category-list mt30">
          {categories.map((item,i) => (
            <a
              key={ i }
              className="d-flex align-items-center justify-content-between"
            >
              {item.name}
              <span className="body-light-color">({item.total})</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
