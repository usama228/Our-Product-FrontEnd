const tags = [
  "Figma",
  "Sketch",
  "HTML5",
  "Software Design",
  "Prototyping",
  "SaaS",
  "Design Writing",
];

export default function Tag1() {
  return (
    <>
      <div className="sidebar-widget mb30 pb20">
        <h4 className="widget-title">Tags</h4>
        <div className="tag-list mt30">
          {tags.map((item, index) => (
            <a key={index}>{item}</a>
          ))}
        </div>
      </div>
    </>
  );
}
